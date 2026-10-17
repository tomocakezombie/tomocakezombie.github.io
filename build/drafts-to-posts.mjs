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

const TABLE_SEPARATOR = /^\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?$/;
const splitRow = (line) =>
  line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim());

// 文中の **太字**・`コード`・[ラベル](URL) は、そのまま文字列に残す（表示側の Inline.astro が処理する）
const parseBody = (text, file) => {
  const blocks = [];
  const lines = text.split(/\r?\n/);
  let paragraph = [];
  // list: トップレベルの { ordered, items }。stack は入れ子を組み立てる作業用
  // items の要素は '文字列'（末端）か { text, list: { ordered, items } }（子リストつき）
  let list = null;
  let stack = null; // [{ indent, list }] 浅い順。先頭がトップレベル
  let depthWarned = false;

  const flushParagraph = () => {
    if (!paragraph.length) return;
    blocks.push(joinLines(paragraph));
    paragraph = [];
  };
  const flushList = () => {
    if (!list) return;
    const block = { type: 'list', items: list.items };
    if (list.ordered) block.ordered = true;
    blocks.push(block);
    list = null;
    stack = null;
    depthWarned = false;
  };
  const flushAll = () => {
    flushParagraph();
    flushList();
  };

  for (let i = 0; i < lines.length; i += 1) {
    const raw = lines[i];
    const line = raw.trim();

    // HTML コメント（公開前の確認メモなど）は無視する
    if (line.startsWith('<!--')) {
      flushAll();
      while (i < lines.length && !lines[i].includes('-->')) i += 1;
      continue;
    }

    // コードブロック（中身はそのまま、インデントも残す）
    const fence = line.match(/^```\s*([A-Za-z0-9_+#.-]*)/);
    if (fence) {
      flushAll();
      const code = [];
      let closed = false;
      for (i += 1; i < lines.length; i += 1) {
        if (lines[i].trim().startsWith('```')) {
          closed = true;
          break;
        }
        code.push(lines[i]);
      }
      if (!closed) warn(file, 'コードブロックが ``` で閉じられていません（最後までをコードとして扱います）');
      const block = { type: 'code', code: code.join('\n').replace(/\n+$/, '') };
      if (fence[1]) block.lang = fence[1].toLowerCase();
      blocks.push(block);
      continue;
    }

    if (!line) {
      flushAll();
      continue;
    }

    // 表（| で始まる行と、その次の --- の区切り行）
    if (line.startsWith('|') && i + 1 < lines.length && TABLE_SEPARATOR.test(lines[i + 1].trim())) {
      flushAll();
      const header = splitRow(line);
      const rows = [];
      for (i += 2; i < lines.length && lines[i].trim().startsWith('|'); i += 1) {
        const row = splitRow(lines[i]);
        if (row.length !== header.length) {
          warn(file, `表の列の数が見出しと合いません（見出し ${header.length} 列、この行 ${row.length} 列）: ${lines[i].trim().slice(0, 30)}`);
        }
        rows.push(header.map((_, index) => row[index] ?? ''));
      }
      i -= 1;
      blocks.push({ type: 'table', header, rows });
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      flushAll();
      // # の数を階層として残す。# は 1 だが見出しの最上位は h2 なので描画側で 2 に寄せる
      blocks.push({ type: 'heading', level: heading[1].length, text: heading[2].trim() });
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

    // 1 行だけのリンクは、ボタンにする
    const link = line.match(/^\[([^\]]+)\]\(\s*([^\s)]+)\s*\)$/);
    if (link) {
      flushAll();
      blocks.push({ type: 'link', label: link[1], url: link[2] });
      continue;
    }

    // 箇条書き（- / *）と番号つきリスト（1. / 1)）。先頭の空白（タブ=4）で入れ子にする
    const item = raw.match(/^(\s*)([-*]|\d+[.)])\s+(.+)$/);
    if (item) {
      const indent = item[1].replace(/\t/g, '    ').length;
      const isOrdered = /\d/.test(item[2]);
      const text = item[3].trim();
      flushParagraph();

      // 同じ最上位の並びで ordered / unordered が変わったら、別のリストとして区切る
      if (list && indent <= stack[0].indent && stack.length === 1 && list.ordered !== isOrdered) flushList();

      if (!list) {
        list = { ordered: isOrdered, items: [] };
        stack = [{ indent, list }];
      } else if (indent > stack[stack.length - 1].indent) {
        // 一段深い: 直前の項目の子リストにする
        if (stack.length >= 3) {
          if (!depthWarned) warn(file, `入れ子の箇条書きは 3 段までです（それより深い項目は同じ階層にします）: ${text.slice(0, 30)}`);
          depthWarned = true;
        } else {
          const parent = stack[stack.length - 1].list;
          const lastIndex = parent.items.length - 1;
          if (lastIndex >= 0) {
            if (typeof parent.items[lastIndex] === 'string') parent.items[lastIndex] = { text: parent.items[lastIndex] };
            const child = { ordered: isOrdered, items: [] };
            parent.items[lastIndex].list = child;
            stack.push({ indent, list: child });
          }
        }
      } else {
        // 同じか浅い: その深さまで戻る
        while (stack.length > 1 && indent < stack[stack.length - 1].indent) stack.pop();
      }

      stack[stack.length - 1].list.items.push(text);
      continue;
    }

    // 問題文ブロック（連続する > の行）。> を外した中身を本文として再帰的に解釈する
    if (line.startsWith('>')) {
      flushAll();
      const inner = [];
      for (; i < lines.length; i += 1) {
        const l = lines[i];
        if (!l.trim().startsWith('>')) {
          i -= 1;
          break;
        }
        inner.push(l.replace(/^\s*>\s?/, ''));
      }
      if (inner.some((l) => /^```/.test(l.trim()))) {
        warn(file, '引用（>）の中のコードブロックは未対応です（``` の行はそのまま文字として出力します）');
      }
      blocks.push({ type: 'problem', blocks: parseBody(inner.join('\n'), file) });
      continue;
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
