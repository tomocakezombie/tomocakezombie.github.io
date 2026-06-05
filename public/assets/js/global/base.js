(function () {
  'use strict';

  const header = document.getElementById('page-header');
  const toggle = header?.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      const isOpen = header.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen);
    });
  }
})();
