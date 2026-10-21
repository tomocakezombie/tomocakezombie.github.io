// 実績データ（_ 始まりのファイルは Astro のルーティング対象外）
// 実績ページとトップページの両方から読み込む
// highlight: true を付けた項目はトップページのステータス画面に「しょうごう」としても表示される（3〜4 個がおすすめ）

// status: 'done'（取得済み） / 'plan'（受験予定）
export const certifications = [
  { name: '基本情報技術者試験（FE）', year: '2024年度', status: 'done', note: '一回受験で合格' },
  { name: '応用情報技術者試験（AP）', year: '2024年度', status: 'done', note: '一回受験で合格' },
  { name: '情報処理安全確保支援士試験（SC）', year: '2025年度', status: 'done', note: '二回受験で合格', highlight: true },
];

// 語学系の試験（情報系資格とは別に分ける）
export const languages = [{ name: 'TOEIC', year: '2026年度', score: '775点' }];

// 選考を通って受講・修了した研修プログラム（資格試験ではないので「情報系資格」とは分ける）
export const programs = [
  { name: 'セキュリティキャンプ全国大会 Cクラス（脅威クラス）', year: '2026年度', label: '修了', highlight: true },
  { name: 'セキュリティミニキャンプ in 山梨', year: '2025年度', label: '受講' },
];

// links は省略可。{ label: 'リンクの表示名', url: 'https://...' } を並べる
// scale は省略可。参加規模（例: '15チーム/30名'）
// details は省略可。参加形式など、補足を 1 行ずつ文字列で書く
export const ctfs = [
  {
    name: '	サイバーセキュリティCTFコンテンスト2024',
    year: '2024',
    rank: '8位くらい / 2人チーム',
    team: 'CTF Lovers',
    scale: '15チーム/30名',
    details: ['初めて対面で参加した CTF です．'],
    links: [{ label: '参考Webページ(外部)', url: 'https://www.ysa.or.jp/?p=1980' }],
  },
  {
    name: '山梨県警察主催 学生サイバーセキュリティCTFコンテスト',
    year: '2025',
    rank: '1位 / 2人チーム',
    team: 'CTF狂い',
    highlight: true,
    scale: '16チーム/30名',
    details: ['1位を獲得しました．', '嬉しかったです．'],
    links: [{ label: '参考Webページ(外部)', url: 'https://www.ysa.or.jp/?p=2100' }],
  },
  {
    name: '関東管区内警察合同サイバーボランティア・学生',
    year: '2026',
    rank: '2位 / 3人チーム',
    team: '空っぽコード',
    highlight: true,
    scale : '59チーム/150人',
    details: ['2位を獲得しました．', '優勝は逃しましたが，良い経験を積めました．'],
    links: [{ label: '参考Webページ(外部)', url: 'https://www.keio.ac.jp/ja/sfc-pem/news/20260319/' }],
  },
];
