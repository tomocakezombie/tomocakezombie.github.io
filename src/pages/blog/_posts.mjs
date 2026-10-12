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
export const posts = [];
