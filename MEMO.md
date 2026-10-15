# tomocakezombie.github.io

## 1. 概要
ポートフォリオ作ります

## 2. 運用
ローカルでブランチを作成＋マージします.

## 3. 記述する内容

## 4. CSS / SCSS 編集ルール

### style.css を直接編集しない

`public/assets/css/global/style.css` はSassが `style.scss` からコンパイルして自動生成するファイル。
直接編集しても `npm run watch` や `npm run build` のタイミングで上書きされる。

**スタイルを変更するときは必ず `public/assets/scss/global/style.scss` を編集する。**

```
public/assets/scss/global/style.scss  ← こちらを編集
        ↓ Sassがコンパイル
public/assets/css/global/style.css    ← 自動生成、直接編集しない
```

同様に、ページ個別のスタイルも `scss/pages/xxx.scss` があればそちらを編集する。

---

## 5. CSS / SCSS 記述ルール

stylelint（`stylelint-config-standard`）によるチェックが走るため、以下のルールに従う。

### 16進数カラーは短縮形を使う

```css
/* ❌ */
color: #000000;
color: #ffffff;
color: #cc0000;

/* ✅ */
color: #000;
color: #fff;
color: #c00;
```

短縮できない色（例: `#1a3a6b`）はそのまま6桁でOK。

### メディアクエリはモダン記法を使う

```scss
/* ❌ */
@media (max-width: 768px) { }
@media (min-width: 768px) { }

/* ✅ */
@media (width <= 768px) { }
@media (width >= 768px) { }
```

SCSSのmixinも同様。

### 色関数の記法（注意点）

`color-function-notation` と `color-function-alias-notation` は **無効化済み**。

理由: Sassがコンパイル時に `rgb(R G B / A)` を `rgba(R, G, B, A)` に自動変換するため、
SCSSで正しく書いてもCSSの出力が古い記法になりエラーになるため。

→ 透明度付きの色は `rgba()` でも `rgb()` でも書いてよい。

---

## 6. コンポーネント・パターン集

### ページの作り方

1. `src/config/view.mjs` の `setPages()` にページを登録する
   ```js
   app.makePage('キー名', '/URLパス', 'ラベル');
   ```
2. `src/pages/ページ名/index.astro` を作成する
3. ページ専用CSSは `public/assets/scss/pages/キー名.scss` に書く（自動で読み込まれる）

最小テンプレート:
```astro
---
import { app, pages } from '/src/config/view';
import { Layout } from '/src/layouts';
import Breadcrumb from '/src/components/Breadcrumb.astro';
app.init(Astro);
app.setPageConfig({ title: 'ページタイトル' });
---

<Layout>
  <Breadcrumb items={[
    { label: 'Top', route: pages.top.route },
    { label: 'ページ名', route: pages.キー名.route },
  ]} />
  <div class="content-main">
    <h2>ページタイトル</h2>
    <!-- ここにコンテンツ -->
  </div>
</Layout>
```

---

### カードボックス（四角で囲む）

`link-card` クラスでセクションを囲む。CSSは各ページの `scss/pages/xxx.scss` に定義。

```astro
<section class="link-card">
  <h3 class="link-card__title">セクションタイトル</h3>
  <!-- 中身 -->
</section>
```

```scss
/* scss/pages/xxx.scss */
.link-card {
  border: 1px solid #bbb;
  padding: 2rem;
  margin-top: 2rem;

  &__title {
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #ddd;
  }
}
```

---

### リンクアイテム（`LinkItem` コンポーネント）

ラベル・日付・タイトル付きのリンク。`src/components/LinkItem.astro` を使う。

```astro
---
import LinkItem from '/src/components/LinkItem.astro';
---

<LinkItem
  href="https://example.com"
  label="開発"
  date="2026/06/10"
  title="リンクのタイトル"
/>
```

| props | 必須 | 説明 |
|---|---|---|
| `href` | ✅ | リンク先URL |
| `title` | ✅ | リンクのタイトル |
| `label` | - | ラベル（色は `LinkItem.astro` の `labelColors` で管理） |
| `date` | - | 日付 |

ラベルの色を追加・変更する場合は `src/components/LinkItem.astro` の `labelColors` を編集する:
```js
const labelColors = {
  '開発': '#1a6b3a',
  '学内': '#123068',
  'SNS':  '#1d9bf0',
};
```

---

## 7. 現在のサイト構成メモ

最終更新: 2026-10。詳しい使い方は `README.md`、各ファイルのコメントを参照。

### ページ一覧（`src/pages/`）

| URL | ファイル | 内容 |
|---|---|---|
| `/` | `index.astro` | トップ。サイト紹介、メニュー、連絡先。背景に流れるハムスター・雲・棒人間のアニメーションあり |
| `/about/` | `about/index.astro` | 自己紹介（ステータス枠、アルバイト、KKI-Assist、技術） |
| `/projects/` | `projects/index.astro` | 作品一覧（カード）。詳細は `projects/[slug].astro` |
| `/achievements/` | `achievements/index.astro` | 実績（資格、経歴、CTF） |
| `/blog/` | `blog/index.astro` | ブログ一覧。記事は `blog/post/[slug].astro` |
| `/links/` | `links/index.astro` | 外部リンク一覧 |
| `/settings/` | `settings/index.astro` | 設定（フォントの切り替え） |

ページは `src/config/view.mjs` の `makePage()` に登録する。ヘッダーのナビは `layouts/Header.astro`、ページ下部のリンクは `components/PageFooter.astro`（トップでは非表示）。

### コンテンツのデータの置き場所

| 内容 | 場所 |
|---|---|
| 作品 | `src/pages/projects/_projects.mjs`（動画は `public/assets/video/`） |
| ブログ記事 | `src/pages/blog/_posts.mjs`（形式は先頭のコメント。本文の描画は `components/PostBody.astro`） |
| 資格・経歴・CTF | `src/pages/achievements/index.astro` の先頭の配列 |
| 連絡先 | `src/pages/index.astro` の先頭の `contacts` |

### 仕組みで覚えておくこと

- **スタイル**: SCSS（`public/assets/scss/`）を編集し、`bash build/sass-compile.sh` で CSS を再生成する。ページ別のスタイルは `scss/pages/<ページのキー>.scss` に置くと自動で読み込まれる。
- **フォントの切り替え**: 初期値は「ふつうのフォント」（`<html data-font="normal">` を最初から付けている）。ヘッダーのボタンと設定ページが、`localStorage` の `font` を共有する。`<head>` の先頭のスクリプトが、`pixel`（ドットフォント）が保存されている人だけ、描画前に `data-font="pixel"` に切り替える。
- **トップの背景アニメーション**: `index.astro` 内の `<script>`。流す画像は `sprites` の配列で、重み（`weight`）と傾き（`tilt`）を指定する。棒人間は確率で 1 回だけ歩く（`WALKER_CHANCE` など）。
- **アクセス解析**: `layouts/Layout.astro` の GA4 タグ。localhost では読み込まない。
- **デプロイ**: `main` に push すると GitHub Actions で GitHub Pages に公開される。ビルド時に stylelint が走るので、SCSS のエラーでデプロイが止まることがある。

### ブログ記事の書き方（基本）

下書きは `drafts/`（git に載らない）に Markdown で書き、スクリプトで記事のデータに変換する。

1. `drafts/_template.md` をコピーして `drafts/好きな名前.md` を作り、書く
   - 先頭の `---` で囲んだメタ情報に `slug`（英数字とハイフン）、`title`、`date`（`2026-10-07`）が必須。`tags` は `,` 区切り、`site.name` などを書くと「サイト情報」の枠が出る
   - 本文は `##` で見出し、空行で段落、`- ` で箇条書き、`![代替](/assets/img/blog/x.png "説明")` で画像、1 行だけの `[ラベル](URL)` でリンクのボタン
2. `npm run drafts` を実行する（`src/pages/blog/_posts.generated.mjs` が更新される）
3. 開発サーバーで `/blog/` を確認し、`_posts.generated.mjs` を commit して push する
   - 公開されるのはこの生成ファイル。GitHub Actions のビルドでは `drafts/` が見えないので、変換は手元で行う
   - 直したいときは Markdown を直して 2. からやり直す。消したいときは Markdown を削除して `npm run drafts`

詳しい書き方と未対応の記法は `drafts/README.md`。変換のしくみは `build/drafts-to-posts.mjs`。手書きで `src/pages/blog/_posts.mjs` に直接足すこともできる（`slug` が重複するとビルドが止まる）。

- 記事一覧は、タグのボタンで絞り込める（`/blog/?tag=タグ名`）。記事ページのタグも同じ絞り込みへのリンクになる。
- 本文では、見出し、段落、箇条書き、番号つきリスト、コードブロック、表、画像、リンクのボタンが使える。文中の `**太字**`・`` `コード` ``・`[ラベル](URL)` も使える（描画は `components/PostBody.astro` と `Inline.astro`）。
- 下書き: メタ情報に `draft: true` を書くと公開しない（生成ファイルに書き出さない）。
- 記事の下には、giscus のコメント欄（GitHub の Discussions）がある。設定は `blog/post/[slug].astro` のスクリプトの属性。

### Git に載せないもの

- `作品素材/`、`自作素材/`、`drafts/`（下書き用の Markdown）の中身。`.gitignore` を各フォルダに置いて、中身を無視している。
- Issue / TODO は GitHub の Issues と Projects で管理している。
