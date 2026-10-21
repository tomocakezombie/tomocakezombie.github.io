// 作品データ（_ 始まりのファイルは Astro のルーティング対象外）
// 作品を追加するときは以下の形式でオブジェクトを追加する
// {
//   slug: 'socket-shooting',              // URL: /projects/socket-shooting/
//   title: '作品タイトル',
//   description: '詳細ページに表示する説明文',
//   videoFile: 'shooting_demo.mp4',       // public/assets/video/ 配下のファイル名（なければ空文字）
//   tech: ['C言語'],
//   github: 'https://github.com/...',     // なければ空文字
//   demo: '',                             // 公開デモの URL（なければ空文字）
//   featured: true,                       // 省略可。true にするとトップページの「注目の作品」に表示される
// }
export const projects = [
  {
    slug: 'socket-shooting',
    title: 'ソケット通信シューティングゲーム',
    description:
`山梨大学工学部コンピュータ理工学科2年後期の授業で制作した作品．
互いに球を打ち出して先に5回命中した方が勝利．
2つの端末でソケット通信を行い，命中判定はサーバー側のみで行うことで同期ズレを防いでいます．
`,
    videoFile: 'shooting_demo.mp4',
    tech: ['C言語'],
    github: 'https://github.com/tomocakezombie/terminal-shooting-game',
    demo: '',
    featured: true,
  },
  {
    slug: 'alpenski',
    title: 'Alpenski',
    description:
`山梨大学工学部コンピュータ理工学科3年前期の授業で制作した作品．
障害物を避けながら旗の間をくぐりつつ，氷山を下っていくゲーム．
三回ミスでゲームオーバー．
`,
    videoFile: 'alpenski_demo.mp4',
    tech: ['Java'],
    github: 'https://github.com/tomocakezombie/alpenski_public',
    demo: '',
  },
  {
    slug: 'bulletin-board',
    title: '学内掲示板',
    description:
`個人開発で作成した掲示板サイトです．
初期案は，ユーザーの入力データをテキストで保存し，フロントに反映するだけの単純なサービスでした．
学内で本掲示板への攻撃が多発し，その都度，防御機構を増やしていきました．
`,
    videoFile: 'bulletinboard_demo.mp4',
    tech: ['Python（バックエンド）', 'PHP（中間）', 'HTML / CSS（フロント）', 'JavaScript（フロント）'],
    github: '',
    demo: '',
    featured: true,
  },
  {
    slug: 'seat-display',
    title: '学内座席表示システム',
    description:
`3人チームで作成したシステムです．
学校の端末に実機でログインしている端末を Web サイトに反映する機能と，ログインしていた時間が長いユーザーをランキングとして反映する機能があります．
初めての共同開発だったため，役割分担や git のルール，システム案のすり合わせなど，さまざまな壁がありましたが，なんとか形にできました．
`,
    videoFile: 'seat_demo.mp4',
    tech: ['Python（バックエンド）', 'PHP（中間）', 'HTML / CSS（フロント）', 'JavaScript（フロント）'],
    github: '',
    demo: '',
    featured: true,
  },
  {
    slug: 'shopping-list',
    title: 'ショッピングリストアプリ',
    description:
`大学の授業（3年後期）で，チームで役割分担をして作成した，ショッピングリストのアプリです．
Django を使った，ソフトウェア開発の練習として作りました．
`,
    videoFile: 'shopping_demo.mp4',
    tech: ['Django'],
    github: 'https://github.com/tomocakezombie/Sdpl_Shopping_public',
    demo: '',
  },
  //   {
  //   slug: 'socket-shooting',
  //   title: 'ソケット通信シューティングゲーム',
  //   description:
  //     '山梨大学工学部コンピュータ理工学科2年後期の授業で制作した作品．互いに球を打ち出して先に5回命中した方が勝利．2つの端末でソケット通信を行い，命中判定はサーバー側のみで行うことで同期ズレを防いでいます．',
  //   videoFile: 'shooting_demo.mp4',
  //   tech: ['C言語'],
  //   github: 'https://github.com/tomocakezombie/terminal-shooting-game',
  //   demo: '',
  // },
  //   {
  //   slug: 'socket-shooting',
  //   title: 'ソケット通信シューティングゲーム',
  //   description:
  //     '山梨大学工学部コンピュータ理工学科2年後期の授業で制作した作品．互いに球を打ち出して先に5回命中した方が勝利．2つの端末でソケット通信を行い，命中判定はサーバー側のみで行うことで同期ズレを防いでいます．',
  //   videoFile: 'shooting_demo.mp4',
  //   tech: ['C言語'],
  //   github: 'https://github.com/tomocakezombie/terminal-shooting-game',
  //   demo: '',
  // },
  //   {
  //   slug: 'socket-shooting',
  //   title: 'ソケット通信シューティングゲーム',
  //   description:
  //     '山梨大学工学部コンピュータ理工学科2年後期の授業で制作した作品．互いに球を打ち出して先に5回命中した方が勝利．2つの端末でソケット通信を行い，命中判定はサーバー側のみで行うことで同期ズレを防いでいます．',
  //   videoFile: 'shooting_demo.mp4',
  //   tech: ['C言語'],
  //   github: 'https://github.com/tomocakezombie/terminal-shooting-game',
  //   demo: '',
  // },
];
