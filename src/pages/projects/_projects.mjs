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
