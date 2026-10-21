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

  // スコアや特定の行動で解除される「じっせき」。解除済みの id を localStorage に持つ
  // score を書いたものはスコアがその値に届いたときに解除される。それ以外は unlock(id) で解除する
  const UNLOCKS_KEY = 'unlocks';
  const ACHIEVEMENTS = {
    start: { title: 'ぼうけんの はじまり', text: 'PRESS START を おした' },
    score300: { title: 'みならい たんけんか', text: 'スコア 300 に とうたつした', score: 300 },
    walker: { title: 'たびびとを つかまえた', text: 'あるく ぼうにんげんを クリックした' },
    konami: { title: 'うらわざ はっけん', text: '↑↑↓↓←→←→BA を にゅうりょくした' },
    score1000: { title: 'ハムスターつかい', text: 'スコア 1000 に とうたつ。トップに かくしコマンドが ふえた', score: 1000 },
  };
  const TOAST_DURATION = 4000;

  const readUnlocks = () => {
    try {
      const value = JSON.parse(localStorage.getItem(UNLOCKS_KEY) ?? '[]');
      return Array.isArray(value) ? value : [];
    } catch {
      return [];
    }
  };

  const unlocked = new Set(readUnlocks());

  let toastBox = null;
  const showToast = (achievement) => {
    if (!toastBox) {
      toastBox = document.createElement('div');
      toastBox.className = 'unlock-toasts';
      toastBox.setAttribute('role', 'status');
      document.body.appendChild(toastBox);
    }
    const toast = document.createElement('div');
    toast.className = 'unlock-toast';
    [
      ['unlock-toast__label', 'じっせき かいじょ！'],
      ['unlock-toast__title', achievement.title],
      ['unlock-toast__text', achievement.text],
    ].forEach(([className, text]) => {
      const p = document.createElement('p');
      p.className = className;
      p.textContent = text;
      toast.appendChild(p);
    });
    toastBox.appendChild(toast);
    setTimeout(() => toast.classList.add('is-leaving'), TOAST_DURATION);
    setTimeout(() => toast.remove(), TOAST_DURATION + 300);
  };

  const unlock = (id) => {
    const achievement = ACHIEVEMENTS[id];
    if (!achievement || unlocked.has(id)) return false;
    unlocked.add(id);
    try {
      localStorage.setItem(UNLOCKS_KEY, JSON.stringify([...unlocked]));
    } catch {
      // 保存できない環境ではページを離れるまでの解除になる
    }
    showToast(achievement);
    document.dispatchEvent(new CustomEvent('unlock', { detail: { id } }));
    return true;
  };

  const unlockByScore = () => {
    Object.entries(ACHIEVEMENTS).forEach(([id, achievement]) => {
      if (achievement.score && score >= achievement.score) unlock(id);
    });
  };

  window.siteScore = {
    get: () => score,
    add(points) {
      score += points;
      save();
      notify();
      unlockByScore();
      return score;
    },
    reset() {
      score = 0;
      save();
      notify();
    },
    unlock,
    isUnlocked: (id) => unlocked.has(id),
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

  // うらわざ（↑↑↓↓←→←→BA）。入力のたびに konami イベントを出し、初回はじっせきも解除する
  const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiPos = 0;
  document.addEventListener('keydown', (event) => {
    const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
    if (key === KONAMI[konamiPos]) konamiPos += 1;
    // ↑ を 3 回以上押したときも、最後の 2 回から続きとして数える
    else if (key === KONAMI[0]) konamiPos = konamiPos === 2 ? 2 : 1;
    else konamiPos = 0;

    if (konamiPos === KONAMI.length) {
      konamiPos = 0;
      unlock('konami');
      document.dispatchEvent(new CustomEvent('konami'));
    }
  });
})();
