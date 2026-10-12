// drafts/*.md を src/pages/blog/_posts.generated.mjs に変換する（npm run drafts）
//
// - 対象: drafts/ 直下の .md（_ で始まるファイルと README.md は除く）
// - ビルド（CI）では実行しない。drafts/ は git に載らないため、生成ファイルの方を git に載せる
// - 書き方は drafts/README.md を参照

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

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

  post.body = parseBody(body, file);
  return post;
};

// ---- body ---------------------------------------------------------------
// 日本語は改行をそのままつなぎ、英数字どうしの境目だけ空白を入れる
const joinLines = (lines) =>
  lines.reduce((text, line) => (/[A-Za-z0-9]$/.test(text) && /^[A-Za-z0-9]/.test(line) ? `${text} ${line}` : text + line));

const parseBody = (text, file) => {
  const blocks = [];
  const lines = text.split(/\r?\n/);
  let paragraph = [];
  let list = [];
  let inCode = false;

  const flushParagraph = () => {
    if (!paragraph.length) return;
    const joined = joinLines(paragraph);
    if (/\]\(/.test(joined)) warn(file, `文中のリンクは未対応です（そのまま文字として出力します）: ${joined.slice(0, 30)}…`);
    if (/\*\*|__|`/.test(joined)) warn(file, `太字やコードなどの記法は未対応です（そのまま文字として出力します）: ${joined.slice(0, 30)}…`);
    blocks.push(joined);
    paragraph = [];
  };
  const flushList = () => {
    if (!list.length) return;
    blocks.push({ type: 'list', items: list });
    list = [];
  };
  const flushAll = () => {
    flushParagraph();
    flushList();
  };

  for (const raw of lines) {
    const line = raw.trim();

    if (line.startsWith('```')) {
      if (!inCode) warn(file, 'コードブロックは未対応です（内容は無視します）');
      inCode = !inCode;
      continue;
    }
    if (inCode) continue;

    if (!line) {
      flushAll();
      continue;
    }

    const heading = line.match(/^#{1,6}\s+(.+)$/);
    if (heading) {
      flushAll();
      blocks.push({ type: 'heading', text: heading[1].trim() });
      continue;
    }

    const image = line.match(/^!\[([^\]]*)\]\(\s*([^\s)]+)(?:\s+"([^"]*)")?\s*\)$/);
    if (image) {
      flushAll();
      const block = { type: 'image', src: image[2], alt: image[1] };
      if (image[3]) block.caption = image[3];
      blocks.push(block);
      continue;
    }

    const link = line.match(/^\[([^\]]+)\]\(\s*([^\s)]+)\s*\)$/);
    if (link) {
      flushAll();
      blocks.push({ type: 'link', label: link[1], url: link[2] });
      continue;
    }

    const item = line.match(/^[-*]\s+(.+)$/);
    if (item) {
      flushParagraph();
      list.push(item[1].trim());
      continue;
    }

    if (/^\d+[.)]\s/.test(line)) {
      warn(file, `番号つきリストは未対応です（段落として出力します）: ${line.slice(0, 30)}`);
    }

    flushList();
    paragraph.push(line);
  }
  flushAll();
  return blocks;
};

// ---- main ---------------------------------------------------------------
const files = readdirSync(draftsDir)
  .filter((name) => name.endsWith('.md') && !name.startsWith('_') && name !== 'README.md')
  .sort();

const posts = files.map((name) => {
  const { meta, body } = parseFrontMatter(readFileSync(join(draftsDir, name), 'utf-8'), name);
  return buildPost(meta, body, name);
});

const slugs = posts.map((post) => post.slug);
const duplicated = slugs.filter((slug, index) => slugs.indexOf(slug) !== index);
if (duplicated.length) throw new Error(`slug が重複しています: ${[...new Set(duplicated)].join(', ')}`);

const output = `// 自動生成ファイル: drafts/*.md から npm run drafts で作られる。手で編集しない
export const generatedPosts = ${JSON.stringify(posts, null, 2)};
`;
writeFileSync(outFile, output);

console.log(`${posts.length} 件の記事を ${outFile.replace(`${root}/`, '')} に書き出しました`);
for (const post of posts) console.log(`  - ${post.slug}（${post.date}）${post.title}`);
for (const message of warnings) console.warn(`警告 ${message}`);
