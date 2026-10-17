(function () {
  'use strict';

  // サイト内を触って回ると貯まる「遊び」のスコア。ゲームのスコア表示を模しただけのもので、
  // サーバーも改ざん対策もない（localStorage に数値を持つだけ）。
  const STORAGE_KEY = 'score';

  const readScore = () => {
    try {
      const value = Number(localStorage.getItem(STORAGE_KEY));
      return Number.isFinite(value) ? value : 0;
    } catch {
      return 0;
    }
  };

  let score = readScore();

  const save = () => {
    try {
      localStorage.setItem(STORAGE_KEY, String(score));
    } catch {
      // 保存できない環境（プライベートモードなど）ではページ内だけの表示になる
    }
  };

  const notify = () => {
    document.dispatchEvent(new CustomEvent('scorechange', { detail: { score } }));
  };

  window.siteScore = {
    get: () => score,
    add(points) {
      score += points;
      save();
      notify();
      return score;
    },
    reset() {
      score = 0;
      save();
      notify();
    },
  };

  // クリックしたリンク・ボタンの種類ごとに加点する。data-score="100" のように個別指定もできる
  const EXCLUDE_SELECTOR = '.nav-toggle, .font-toggle, .blog-code__copy, [data-score="0"]';
  const POINT_RULES = [
    ['.pixel-btn', 100], // 目立つボタン（外部リンク・CTF参考ページなど）
    ['a[target="_blank"]', 50], // それ以外の外部リンク
    ['a, button', 10], // サイト内のリンク・ボタン全般
  ];

  const pointsFor = (el) => {
    const scored = el.closest('[data-score]');
    if (scored) return Number(scored.dataset.score) || 0;
    for (const [selector, points] of POINT_RULES) {
      if (el.closest(selector)) return points;
    }
    return 0;
  };

  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target.closest('a, button') : null;
    if (!target || target.closest(EXCLUDE_SELECTOR)) return;
    const points = pointsFor(target);
    if (points > 0) window.siteScore.add(points);
  });
})();
