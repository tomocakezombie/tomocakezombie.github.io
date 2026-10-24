// drafts/*.md を src/pages/blog/_posts.generated.mjs に変換する（npm run drafts）
//
// - 対象: drafts/ 直下の .md（_ で始まるファイルと README.md は除く）
// - ビルド（CI）では実行しない。drafts/ は git に載らないため、生成ファイルの方を git に載せる
// - 書き方は drafts/README.md を参照

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseMarkdown } from '../src/components/markdown.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const draftsDir = join(root, 'drafts');
const outFile = join(root, 'src/pages/blog/_posts.generated.mjs');

const warnings = [];
const warn = (file, message) => warnings.push(`${file}: ${message}`);

const splitList = (value) =>
  value
    .split(/[,、]/)
    .map((item) => item.trim())
    .filter(Boolean);

// ---- front matter -------------------------------------------------------
const parseFrontMatter = (text, file) => {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) throw new Error(`${file}: 先頭に --- で囲んだメタ情報（front matter）がありません`);

  const meta = {};
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim() || line.trim().startsWith('#')) continue;
    const index = line.indexOf(':');
    if (index < 0) throw new Error(`${file}: メタ情報の行に ":" がありません: ${line}`);
    meta[line.slice(0, index).trim()] = line.slice(index + 1).trim();
  }
  return { meta, body: match[2] };
};

const buildPost = (meta, body, file) => {
  for (const key of ['slug', 'title', 'date']) {
    if (!meta[key]) throw new Error(`${file}: メタ情報に ${key} がありません`);
  }
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(meta.slug)) {
    throw new Error(`${file}: slug は小文字の英数字とハイフンだけで書いてください: ${meta.slug}`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(meta.date)) {
    throw new Error(`${file}: date は YYYY-MM-DD の形式で書いてください: ${meta.date}`);
  }

  const post = { slug: meta.slug, title: meta.title, date: meta.date };
  if (meta.tags) post.tags = splitList(meta.tags);
  if (meta.description) post.description = meta.description;

  if (meta['site.name']) {
    post.site = { name: meta['site.name'] };
    if (meta['site.url']) post.site.url = meta['site.url'];
    if (meta['site.role']) post.site.role = meta['site.role'];
    if (meta['site.period']) post.site.period = meta['site.period'];
    if (meta['site.tech']) post.site.tech = splitList(meta['site.tech']);
  }

  const blocks = parseMarkdown(body, (message) => warn(file, message));

  // 最初の見出し（## 問1 など）より前に書いた部分は、記事の概要として別枠に表示する
  let introEnd = 0;
  while (introEnd < blocks.length && blocks[introEnd]?.type !== 'heading') introEnd += 1;
  const intro = blocks.slice(0, introEnd);
  const main = blocks.slice(introEnd);

  // 大見出し（## 問1 など、level 2）に id を振って、ジャンプリンク（目次）を作る
  const toc = [];
  let sectionCount = 0;
  for (const block of main) {
    if (block?.type === 'heading' && (block.level ?? 3) <= 2) {
      sectionCount += 1;
      block.id = `section-${sectionCount}`;
      toc.push({ id: block.id, text: block.text });
    }
  }

  if (intro.length) post.intro = intro;
  if (toc.length > 1) post.toc = toc;
  post.body = main;
  return post;
};

// ---- main ---------------------------------------------------------------
const files = readdirSync(draftsDir)
  .filter((name) => name.endsWith('.md') && !name.startsWith('_') && name !== 'README.md')
  .sort();

const isTrue = (value) => ['true', 'yes', '1', 'はい'].includes(String(value ?? '').toLowerCase());

const skipped = [];
const posts = [];
for (const name of files) {
  const { meta, body } = parseFrontMatter(readFileSync(join(draftsDir, name), 'utf-8'), name);
  // 下書き（draft: true）は書き出さない。生成ファイルは git に載り公開されるため、中身を入れない
  if (isTrue(meta.draft)) {
    skipped.push(name);
    continue;
  }
  posts.push(buildPost(meta, body, name));
}

const slugs = posts.map((post) => post.slug);
const duplicated = slugs.filter((slug, index) => slugs.indexOf(slug) !== index);
if (duplicated.length) throw new Error(`slug が重複しています: ${[...new Set(duplicated)].join(', ')}`);

const output = `// 自動生成ファイル: drafts/*.md から npm run drafts で作られる。手で編集しない
export const generatedPosts = ${JSON.stringify(posts, null, 2)};
`;
writeFileSync(outFile, output);

console.log(`${posts.length} 件の記事を ${outFile.replace(`${root}/`, '')} に書き出しました`);
for (const post of posts) console.log(`  - ${post.slug}（${post.date}）${post.title}`);
for (const name of skipped) console.log(`  - 下書きのため書き出しません: ${name}`);
for (const message of warnings) console.warn(`警告 ${message}`);
