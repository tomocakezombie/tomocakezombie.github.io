(function () {
  'use strict';

  // 作品詳細のスクリーンショットをクリックで拡大表示する（<head> で読み込まれるため document に委譲する）
  document.addEventListener('click', function (event) {
    const lightbox = document.querySelector('.project-lightbox');
    if (!lightbox) return;

    const trigger = event.target.closest('[data-lightbox-src]');
    if (trigger) {
      const img = lightbox.querySelector('.project-lightbox__img');
      const thumb = trigger.querySelector('img');
      img.src = trigger.dataset.lightboxSrc;
      img.alt = thumb ? thumb.alt : '';
      lightbox.querySelector('.project-lightbox__caption').textContent = trigger.dataset.lightboxCaption;
      lightbox.showModal();
      return;
    }

    // 閉じるボタン，または画像の外側（背景）をクリックしたら閉じる
    if (lightbox.open && (event.target.closest('.project-lightbox__close') || event.target === lightbox)) {
      lightbox.close();
    }
  });

  // スクリーンショットのカルーセル（横スクロール + scroll-snap を JS で自動送りする。JS なしでも手でスクロールできる）
  const INTERVAL = 4000;

  function initCarousel(carousel) {
    const track = carousel.querySelector('[data-carousel-track]');
    const slides = track.children;
    const dots = carousel.querySelectorAll('[data-carousel-dot]');
    const lightbox = document.querySelector('.project-lightbox');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let current = 0;
    let timer = null;
    let hovering = false;
    let focusing = false;

    function goTo(index) {
      current = (index + slides.length) % slides.length;
      track.scrollTo({ left: current * track.clientWidth, behavior: reduceMotion ? 'auto' : 'smooth' });
    }

    function updateDots() {
      dots.forEach(function (dot, i) {
        if (i === current) dot.setAttribute('aria-current', 'true');
        else dot.removeAttribute('aria-current');
      });
    }

    // マウスが乗っている・フォーカス中・拡大表示中・タブ非表示のあいだは止める
    function restart() {
      clearInterval(timer);
      timer = null;
      if (reduceMotion || slides.length < 2) return;
      if (hovering || focusing || document.hidden || (lightbox && lightbox.open)) return;
      timer = setInterval(function () {
        goTo(current + 1);
      }, INTERVAL);
    }

    // スワイプや手動スクロールでも現在位置とドットを追従させる
    track.addEventListener('scroll', function () {
      const index = Math.round(track.scrollLeft / track.clientWidth);
      if (index !== current && index >= 0 && index < slides.length) current = index;
      updateDots();
    }, { passive: true });

    carousel.addEventListener('click', function (event) {
      if (event.target.closest('[data-carousel-prev]')) goTo(current - 1);
      else if (event.target.closest('[data-carousel-next]')) goTo(current + 1);
      else {
        const dot = event.target.closest('[data-carousel-dot]');
        if (!dot) return;
        goTo(Number(dot.dataset.carouselDot));
      }
      restart();
    });

    carousel.addEventListener('mouseenter', function () { hovering = true; restart(); });
    carousel.addEventListener('mouseleave', function () { hovering = false; restart(); });
    // タップやクリックで付いたフォーカスでは止めず，キーボード操作のときだけ止める
    carousel.addEventListener('focusin', function (event) { focusing = event.target.matches(':focus-visible'); restart(); });
    carousel.addEventListener('focusout', function () { focusing = false; restart(); });
    document.addEventListener('visibilitychange', restart);
    if (lightbox) {
      // showModal() はイベントを出さないので，属性の変化で開閉を検知する
      new MutationObserver(restart).observe(lightbox, { attributes: true, attributeFilter: ['open'] });
    }
    // 幅が変わったら現在のスライド位置に合わせ直す
    window.addEventListener('resize', function () {
      track.scrollTo({ left: current * track.clientWidth });
    });

    restart();
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-carousel]').forEach(initCarousel);
  });
})();
