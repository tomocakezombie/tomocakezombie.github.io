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

  // スコアや特定の行動で解除される「きろく」。解除済みの id と解除した日時（ミリ秒）を localStorage に持つ
  // score を書いたものはスコアがその値に届いたときに解除される。それ以外は unlock(id) で解除する
  // hint は、きろくページで まだ解除していないものの代わりに出す
  // 左側の id はプログラムから参照しているので変えないこと。並び順はきろくページの表示順になる
  const UNLOCKS_KEY = 'unlocks';
  const ACHIEVEMENTS = {
    start: { title: 'ぼうけんの はじまり', text: 'PRESS START を おした', hint: 'トップページで ゲームを はじめよう' },
    score300: { title: 'みならい たんけんか', text: 'スコア 300 に とうたつした', hint: 'スコアを 300 ためよう', score: 300 },
    walker: { title: 'たびびとを つかまえた', text: 'あるく ぼうにんげんを クリックした', hint: 'トップページを あるく だれかを さがそう' },
    konami: { title: 'うらわざ はっけん', text: '↑↑↓↓←→←→BA を にゅうりょくした', hint: 'むかしから つたわる あの コマンド…' },
    score1000: { title: 'ハムスターつかい', text: 'スコア 1000 に とうたつ。トップに かくしコマンドが ふえた', hint: 'スコアを 1000 ためよう', score: 1000 },
    ad: { title: 'こうこくに ひっかかった', text: 'あやしい こうこくを おした', hint: 'どこかの ページの いちばん したに あやしい こうこくが…' },
    adClose: { title: 'きょひの いし', text: 'こうこくを × で とじた', hint: 'こうこくは とじることも できる' },
  };
  const TOAST_DURATION = 4000;

  // { id: 解除日時 } の形で読む。以前の形式（id の配列）は日時なし（null）として引き継ぐ
  const readUnlocks = () => {
    try {
      const value = JSON.parse(localStorage.getItem(UNLOCKS_KEY) ?? '{}');
      if (Array.isArray(value)) return value.map((id) => [id, null]);
      return value && typeof value === 'object' ? Object.entries(value) : [];
    } catch {
      return [];
    }
  };

  const unlocked = new Map(readUnlocks());

  const saveUnlocks = () => {
    try {
      localStorage.setItem(UNLOCKS_KEY, JSON.stringify(Object.fromEntries(unlocked)));
    } catch {
      // 保存できない環境ではページを離れるまでの解除になる
    }
  };

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
      ['unlock-toast__label', 'あたらしい きろく！'],
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
    unlocked.set(id, Date.now());
    saveUnlocks();
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
    // スコアと一緒に、きろくも消す
    reset() {
      score = 0;
      save();
      unlocked.clear();
      saveUnlocks();
      notify();
    },
    unlock,
    isUnlocked: (id) => unlocked.has(id),
    // きろくページ用。定義の順に、解除済みかどうかと解除日時（不明なら null）を付けて返す
    records: () =>
      Object.entries(ACHIEVEMENTS).map(([id, achievement]) => ({
        id,
        ...achievement,
        unlocked: unlocked.has(id),
        unlockedAt: unlocked.get(id) ?? null,
      })),
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

  // うらわざ（↑↑↓↓←→←→BA）。入力のたびに konami イベントを出し、初回はきろくも解除する
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
