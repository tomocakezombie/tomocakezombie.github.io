// 作品データ（_ 始まりのファイルは Astro のルーティング対象外）
// 作品を追加するときは以下の形式でオブジェクトを追加する
// {
//   slug: 'socket-shooting',              // URL: /projects/socket-shooting/
//   title: '作品タイトル',
//   description: `詳細ページに表示する説明文`,  // Markdown で書ける（段落は空行で区切る。- の箇条書きは 2 スペース下げると入れ子。**太字** など）
//   videoFile: 'shooting_demo.mp4',       // public/assets/video/ 配下のファイル名（なければ空文字）
//   images: [                             // 省略可。詳細ページのスクリーンショット（クリックで拡大）
//     { file: 'sasutena/sasutena_1.webp', alt: '代替テキスト', caption: '画像の下に出す説明' }, // file は public/assets/img/projects/ 配下のパス
//   ],
//   tech: ['C言語'],
//   github: 'https://github.com/...',     // なければ空文字
//   demo: '',                             // 公開デモの URL（なければ空文字）
//   featured: true,                       // 省略可。true にするとトップページの「注目の作品」に表示される
//   quest: {                              // 省略可。書くとトップページの「セキュリティクエスト」に表示される（セキュリティ面の概要）
//     icon: 'shield',                     // public/assets/img/quest/ 配下の SVG 名
//     name: 'けいじばんを まもりぬけ',     // クエスト名
//     label: 'SDGsメルカリアプリ',        // 省略可。title だけでは伝わらないときに、代わりに出す作品名
//     summary: '1 行の概要',
//     tags: ['学内認証'],                 // 3〜5 個まで
//   },
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
`個人開発で作成した学内向けの掲示板サイトです．

初期案は，ユーザーの入力データをテキストで保存し，フロントに反映するだけの単純なサービスでした．

公開後，学内で本掲示板への攻撃が多発し，その都度，防御機構を増やしていきました．現在の主な対策は以下の通りです．

- **アクセス制御**
  - 学内認証（LDAP）の必須化
  - Tor 経由のアクセス拒否
- **ボット対策**
  - reCAPTCHA v3 のスコア判定
- **投稿頻度制限**
  - IP 単位の回数制限
  - ユーザー単位の回数制限（約150台の IP からの分散攻撃を受けて追加）
- **入力検証**
  - 文字数制限
  - 制御文字・双方向制御文字の拒否
- **添付画像対策**
  - 画像の中身による形式判定
  - ランダムなファイル名での保存
  - 再エンコードによる偽装データの除去
- **インジェクション / XSS 対策**
  - パラメータ化クエリ
  - シェル引数のエスケープ
  - textContent による安全な描画
- **監視**
  - 投稿ログの記録
`,
    videoFile: 'bulletinboard_demo.mp4',
    tech: ['Python（バックエンド）', 'PHP（中間）', 'HTML / CSS（フロント）', 'JavaScript（フロント）'],
    github: '',
    demo: '',
    featured: true,
    quest: {
      icon: 'shield',
      name: 'けいじばんを まもりぬけ',
      summary: '攻撃を受けるたびに防御を増やしました．約150台の IP からの分散攻撃にも対応しています．',
      tags: ['学内認証', '投稿頻度制限', '入力検証', '画像対策'],
    },
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
    quest: {
      icon: 'key',
      name: 'いりぐちを かためよ',
      label: 'SDGsメルカリアプリ',
      summary: 'コーディングリーダーとして，考えられる対策をすべて組み込みました．',
      tags: ['メール認証', '管理者承認', '3ロール', '権限チェック', 'CSRF対策'],
    },
  },
  {
    slug: 'minesweeper',
    title: 'マインスウィーパー',
    description:
`DxLibを使って作ったマインスウィーパーです．

ソースコードは紛失してしまいました．

クリアすると，ハムスターが喜びます．
`,
    videoFile: 'minesweeper_demo.mp4',
    tech: ['C++', 'DxLib'],
    github: '',
    demo: '',
  },
  {
    slug: 'assist-ctf-3rd',
    title: 'Assist CTF 3rd',
    description:
`サークル Assist 向けの CTF 競技サーバーの構築と，問題作成を担当しました．

サーバーは CTFd を使ったため，構築自体は時間がかかりませんでしたが，問題作成には2か月ほどかかりました．問題の作成は初めてでした．

テーマは「楽しく端末保守に使う skill を身につける」です．サーバーは外部に公開していないため，問題の概要だけ紹介します．

- 写真の撮影場所特定
- BASE64
- flag 文字列の検索
- Web サイトの隠し文字探し
- 拡張子の特定
- プロセス名の取得
- diff
- zip の入れ子
- バイナリ解析
- ハッシュ値からのレインボーテーブル割り出し
- リダイレクトの判定
`,
    videoFile: 'assist_ctf_demo.mp4',
    images: [
      { file: 'assist-ctf/assist_ctf_1.webp', alt: '問題「拡張子マトリックス」の画面', caption: '拡張子マトリックス（File・50点）' },
      { file: 'assist-ctf/assist_ctf_2.webp', alt: '問題「ZIPマトリョーシカ2」の画面', caption: 'ZIPマトリョーシカ2（File・150点）' },
      { file: 'assist-ctf/assist_ctf_3.webp', alt: '問題「二十一×二十一」の画面', caption: '二十一×二十一（Steganography・100点）' },
      { file: 'assist-ctf/assist_ctf_4.webp', alt: '問題「password cracking2」の画面', caption: 'password cracking2（binary・150点）' },
      { file: 'assist-ctf/assist_ctf_5.webp', alt: '問題「redirect」の画面', caption: 'redirect（Web・150点）' },
    ],
    tech: ['CTFd'],
    github: '',
    demo: '',
    quest: {
      icon: 'flag',
      name: 'なぞときの ダンジョンを つくれ',
      label: 'CTF競技の運営',
      summary: '楽しく端末保守のスキルを身につける CTF を，サーバー構築から問題作成まで担当しました．',
      tags: ['CTFd構築', '作問', 'Web / binary / File'],
    },
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
