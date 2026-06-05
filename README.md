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
