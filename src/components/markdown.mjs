// Markdown を、PostBlocks.astro で描画できるブロックの配列に変換する
//   ブログ（build/drafts-to-posts.mjs）と作品の説明（projects/[slug].astro）で共用する
//   書き方は drafts/README.md の「本文」を参照
//   warn(message) には、書き方の誤りなどの警告が渡される

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
/**
 * @param {string} text
 * @param {(message: string) => void} [warn]
 * @returns {any[]}
 */
export const parseMarkdown = (text, warn = () => {}) => {
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
      if (!closed) warn('コードブロックが ``` で閉じられていません（最後までをコードとして扱います）');
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
          warn(`表の列の数が見出しと合いません（見出し ${header.length} 列、この行 ${row.length} 列）: ${lines[i].trim().slice(0, 30)}`);
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
          if (!depthWarned) warn(`入れ子の箇条書きは 3 段までです（それより深い項目は同じ階層にします）: ${text.slice(0, 30)}`);
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
        warn('引用（>）の中のコードブロックは未対応です（``` の行はそのまま文字として出力します）');
      }
      blocks.push({ type: 'problem', blocks: parseMarkdown(inner.join('\n'), warn) });
      continue;
    }

    flushList();
    paragraph.push(line);
  }
  flushAll();
  return blocks;
};
