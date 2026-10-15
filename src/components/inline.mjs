// ブログ本文の文中の書式を、安全なノードの配列に分解する
//   `コード`            → { type: 'code' }
//   [ラベル](URL)       → { type: 'link' }（http(s)・mailto・サイト内のパス・ページ内リンクだけ許可）
//   **太字**            → { type: 'strong' }
// HTML は組み立てず、描画は Inline.astro がノードごとに行う（本文中の < や > はそのまま文字になる）

const PATTERN = /(`[^`\n]+`)|(\[[^\]\n]+\]\([^)\s]+\))|(\*\*[^*\n]+\*\*)/g;
const SAFE_URL = /^(https?:\/\/|mailto:|\/|#)/;

export const isSafeUrl = (url) => SAFE_URL.test(url);

export function parseInline(text) {
  const nodes = [];
  let last = 0;

  for (const match of text.matchAll(PATTERN)) {
    if (match.index > last) nodes.push({ type: 'text', text: text.slice(last, match.index) });
    const token = match[0];

    if (match[1]) {
      nodes.push({ type: 'code', text: token.slice(1, -1) });
    } else if (match[2]) {
      const [, label, url] = token.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
      // 安全でない URL（javascript: など）はリンクにせず、書いたとおりの文字で出す
      nodes.push(isSafeUrl(url) ? { type: 'link', text: label, url } : { type: 'text', text: token });
    } else {
      nodes.push({ type: 'strong', text: token.slice(2, -2) });
    }
    last = match.index + token.length;
  }

  if (last < text.length) nodes.push({ type: 'text', text: text.slice(last) });
  return nodes;
}
