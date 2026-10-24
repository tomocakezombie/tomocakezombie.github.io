// 作品データ（_ 始まりのファイルは Astro のルーティング対象外）
// 作品を追加するときは以下の形式でオブジェクトを追加する
// {
//   slug: 'socket-shooting',              // URL: /projects/socket-shooting/
//   title: '作品タイトル',
//   description: '詳細ページに表示する説明文',
//   videoFile: 'shooting_demo.mp4',       // public/assets/video/ 配下のファイル名（なければ空文字）
//   images: [                             // 省略可。詳細ページのスクリーンショット（クリックで拡大）
//     { file: 'sasutena/sasutena_1.webp', alt: '代替テキスト', caption: '画像の下に出す説明' }, // file は public/assets/img/projects/ 配下のパス
//   ],
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
  {
    slug: 'sasutena',
    title: 'SASUTENA',
    description:
`大学の授業「ソフトウェア開発プロジェクト実習2」で，4人チームで制作した Web アプリです．自分はコーディングリーダーを担当しました．
生産者が抱える余剰食品や未使用品を，必要とする消費者とマッチングし，食品ロスの削減を目指すサービスです．
生産者 / 消費者 / 管理者の3ロールがあり，メール認証付きの登録，出品と申請，ダイレクトメッセージ，取引後の評価などの機能があります．
`,
    videoFile: 'sasutena_demo.mp4',
    images: [
      { file: 'sasutena/sasutena_3.webp', alt: 'SASUTENA のトップページ', caption: 'トップページ' },
      { file: 'sasutena/sasutena_4.webp', alt: '利用登録申請フォーム', caption: '利用登録申請（生産者 / 消費者を選択）' },
      { file: 'sasutena/sasutena_5.webp', alt: '認証コード確認画面', caption: 'メールで届く認証コードの確認' },
      { file: 'sasutena/sasutena_6.webp', alt: 'ログイン画面', caption: 'ログイン（管理者の承認後に利用可能）' },
      { file: 'sasutena/sasutena_1.webp', alt: '生産者のプロフィール画面', caption: '生産者のプロフィール（評価・自己紹介）' },
      { file: 'sasutena/sasutena_2.webp', alt: 'ダイレクトメッセージ画面', caption: 'ダイレクトメッセージ' },
    ],
    tech: ['Django', 'Python', 'SQLite', 'Bootstrap'],
    github: 'https://github.com/tomocakezombie/SASUTENA_public',
    demo: '',
    featured: true,
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
