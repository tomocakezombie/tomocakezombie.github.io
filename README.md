# tomocakezombie.github.io

山梨大学 工学部 コンピュータ理工学科の学生、tomocakezombie の個人ポートフォリオサイトです。
自己紹介、作品、実績、ブログ、外部リンクをまとめています。

公開 URL: https://tomocakezombie.github.io/

## 技術スタック

- [Astro](https://astro.build/)（静的サイト生成）
- Sass（SCSS から CSS を生成）
- stylelint（CSS のチェック）
- フォント: [PixelMplus](https://github.com/itouhiro/PixelMplus)（M+ FONT LICENSE）

## 動作環境

- Node.js 22.12 以上

## ローカルでの起動

```bash
npm install
npm run dev
```

起動後、http://localhost:4321 で確認できます。

## ビルド

```bash
npm run build
```

成果物は `dist/` に出力されます。

## デプロイ

`main` ブランチに push すると、`.github/workflows/deploy.yml` が GitHub Actions で実行され、GitHub Pages に公開されます。

## ディレクトリ構成

```
src/
├── pages/          ページ（URL になる）
│   ├── index.astro         トップ
│   ├── about/              自己紹介
│   ├── projects/           作品（一覧 + 詳細）
│   ├── achievements/       実績
│   ├── blog/               ブログ（一覧 + 記事）
│   └── links/              外部リンク
├── layouts/        共通レイアウト（ヘッダー・フッターを含む）
├── components/     再利用するコンポーネント
└── config/         サイト設定（view.mjs など）

public/assets/
├── scss/           スタイルの元ファイル（編集するのはこちら）
├── css/            SCSS から生成される CSS（直接編集しない）
├── fonts/          フォント
├── img/            画像
└── video/          動画
```

## コンテンツの追加・編集

| 内容 | 編集するファイル |
|---|---|
| 作品の追加 | `src/pages/projects/_projects.mjs` |
| ブログ記事の追加 | `src/pages/blog/_posts.mjs` |
| 自己紹介 | `src/pages/about/index.astro` |
| 実績 | `src/pages/achievements/index.astro` |
| サイト名・ページ設定 | `src/config/view.mjs` |

作品データの書き方は `_projects.mjs` 内のコメントを参照してください。動画は `public/assets/video/` に置き、ファイル名を `videoFile` に指定します。

## スタイルの編集

スタイルは `public/assets/scss/` の SCSS を編集します。`public/assets/css/` の CSS は自動生成されるため、直接編集しないでください。

```bash
bash build/sass-compile.sh   # CSS を一度だけ生成
npm run watch                # 保存のたびに自動生成
```

CSS のチェックは次のコマンドで行います。

```bash
npm run stylelint
```

## ライセンス・クレジット

- フォント PixelMplus は M+ FONT LICENSE に従って再配布しています。ライセンス文は `public/assets/fonts/` に含まれています。
- 上記以外の文章・画像・作品は tomocakezombie が制作したものです。
