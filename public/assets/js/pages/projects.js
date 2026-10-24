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
})();
