// ブログ記事データ（_ 始まりのファイルは Astro のルーティング対象外）
// 記事を追加するときは、下の posts に次の形式のオブジェクトを追加する
//
// {
//   slug: 'my-first-site',               // URL: /blog/post/my-first-site/
//   title: '記事タイトル',
//   date: '2026-10-07',
//   tags: ['サイト制作', 'Astro'],
//   description: '一覧に表示する概要',
//
//   // 制作・執筆に携わったサイトの情報（省略可。書くと記事の上に「サイト情報」の枠が出る）
//   site: {
//     name: 'サイト名',
//     url: 'https://example.com/',       // 省略可
//     role: '担当した役割',               // 省略可
//     period: '2026 前期',                // 省略可
//     tech: ['Astro', 'SCSS'],            // 省略可
//   },
//
//   // 本文。要素ごとに次のどれかを書く
//   body: [
//     '文字列だけなら段落になる',
//     { type: 'heading', text: '見出し' },
//     { type: 'list', items: ['箇条書き1', '箇条書き2'] },
//     { type: 'image', src: '/assets/img/blog/example.png', alt: '代替テキスト', caption: '図の説明（省略可）' },
//     { type: 'link', label: 'サイトをみる', url: 'https://example.com/' },
//   ],
// }
//
// 画像は public/assets/img/blog/ に置き、src は /assets/img/blog/ファイル名 と書く。
//
// drafts/ の Markdown から作った記事は _posts.generated.mjs にまとめられ、ここの記事と合わせて表示される
// （npm run drafts で変換。書き方は drafts/README.md）。
import { generatedPosts } from './_posts.generated.mjs';

// 手書きで追加する記事（drafts/ から変換した記事は _posts.generated.mjs に入る）
const manualPosts = [];

const allPosts = [...manualPosts, ...generatedPosts];
const slugs = allPosts.map((post) => post.slug);
const duplicated = slugs.filter((slug, index) => slugs.indexOf(slug) !== index);
if (duplicated.length) {
  throw new Error(`ブログ記事の slug が重複しています: ${[...new Set(duplicated)].join(', ')}`);
}

export const posts = allPosts;
