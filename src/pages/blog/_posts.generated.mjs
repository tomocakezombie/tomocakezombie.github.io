// 自動生成ファイル: drafts/*.md から npm run drafts で作られる。手で編集しない
export const generatedPosts = [
  {
    "slug": "markdown-sample",
    "title": "Markdown 記法のサンプル",
    "date": "2026-10-15",
    "tags": [
      "サンプル",
      "Markdown"
    ],
    "description": "ブログで使える Markdown の書き方の一覧です．",
    "body": [
      {
        "type": "heading",
        "text": "見出し"
      },
      "`##` や `###` で見出しになります（`#` の数による見た目の違いはありません）．",
      {
        "type": "heading",
        "text": "小さめの見出し"
      },
      "見出しのあとに文章を続けます．",
      {
        "type": "heading",
        "text": "文章（段落）"
      },
      "文章は，空行で区切ると別の段落になります．改行だけでは段落は分かれません．この行は上の行と同じ段落です．",
      "空行を入れたので，ここからが次の段落です．",
      {
        "type": "heading",
        "text": "文中の書式"
      },
      "文章の途中で，**太字**，`インラインコード`，[リンク](https://example.com/) が使えます．",
      "サイト内のページへのリンクは，[自己紹介](/about/) のように `/` から始まるパスで書きます．",
      {
        "type": "heading",
        "text": "箇条書き"
      },
      {
        "type": "list",
        "items": [
          "箇条書きの 1 つ目",
          "箇条書きの 2 つ目",
          "**太字**や `コード` も入れられます"
        ]
      },
      {
        "type": "heading",
        "text": "番号つきリスト"
      },
      {
        "type": "list",
        "items": [
          "最初の手順",
          "次の手順",
          "最後の手順"
        ],
        "ordered": true
      },
      {
        "type": "heading",
        "text": "コードブロック"
      },
      "言語名を付けると，色付きで表示されます．",
      {
        "type": "code",
        "code": "const greet = (name) => {\n  console.log(`Hello, ${name}`);\n};\ngreet('world');",
        "lang": "js"
      },
      {
        "type": "code",
        "code": "def add(a, b):\n    return a + b\n\nprint(add(1, 2))",
        "lang": "python"
      },
      "言語名を付けない場合は，色なしで表示されます．",
      {
        "type": "code",
        "code": "$ npm run build"
      },
      {
        "type": "heading",
        "text": "表"
      },
      {
        "type": "table",
        "header": [
          "項目",
          "内容"
        ],
        "rows": [
          [
            "名前",
            "`tomocakezombie`"
          ],
          [
            "サイト",
            "[ポートフォリオ](https://tomocakezombie.github.io/)"
          ],
          [
            "太字",
            "**表の中でも書式が使えます**"
          ]
        ]
      },
      {
        "type": "heading",
        "text": "画像"
      },
      "画像は `public/assets/img/blog/` に置いて，パスを指定します．引用符の中の文字は，図の説明として画像の下に出ます．",
      {
        "type": "image",
        "src": "/assets/img/hamster.png",
        "alt": "ハムスターのドット絵",
        "caption": "図の説明は省略できます"
      },
      {
        "type": "heading",
        "text": "リンクのボタン"
      },
      "リンクだけを 1 行で書くと，ボタンとして表示されます（文章の途中に入れたリンクは，普通のリンクです）．",
      {
        "type": "link",
        "label": "サイトをみる",
        "url": "https://tomocakezombie.github.io/"
      }
    ]
  },
  {
    "slug": "my-first-site",
    "title": "ポートフォリオ作りました",
    "date": "2026-10-13",
    "tags": [
      "サイト制作",
      "Astro",
      "ポートフォリオ"
    ],
    "description": "このサイト作成にまつわる話です．",
    "site": {
      "name": "tomocakezombie.github.io",
      "url": "https://tomocakezombie.github.io/",
      "role": "制作・執筆",
      "period": "2026 後期",
      "tech": [
        "Astro",
        "SCSS"
      ]
    },
    "body": [
      {
        "type": "heading",
        "text": "どんなサイトか"
      },
      "昔のゲームのようなドット絵の見た目をテーマにした，個人のポートフォリオサイトです．",
      {
        "type": "heading",
        "text": "サイトを作り始めた背景"
      },
      "もともと大学に入ってから色々なことに手を出してきたので，整理したいと思っていました．そんな中，セキュリティキャンプで出会った方のウェブサイトを見て，自分もこういうサイトを作って見たいと思ったのがきっかけです．",
      {
        "type": "heading",
        "text": "コンセプト"
      },
      "見ていて楽しい，昔のゲームのような雰囲気のポートフォリオを目指しています．",
      {
        "type": "heading",
        "text": "イラストについて"
      },
      "イラストは基本的に自作で，「ミニドット絵メーカー3」を使わせていただいて作成しています．",
      {
        "type": "heading",
        "text": "隠し要素"
      },
      {
        "type": "list",
        "items": [
          "トップ画面の雲は，時々特定の形で流れてきます．",
          "他にも随所で追加する予定です．"
        ]
      },
      {
        "type": "heading",
        "text": "リンク"
      },
      {
        "type": "link",
        "label": "本サイト",
        "url": "https://tomocakezombie.github.io/"
      },
      {
        "type": "link",
        "label": "ミニドット絵メーカー３",
        "url": "https://neutralx0.net/tools/dot3/"
      }
    ]
  }
];
