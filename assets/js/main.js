// scripts do site arc Team

(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var elements = document.querySelectorAll('.reveal');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    elements.forEach(function (el) {
      el.classList.add('is-visible');
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );

  elements.forEach(function (el) {
    observer.observe(el);
  });
})();

// Accordion de destaques com troca de imagem por estado
(function () {
  var items = document.querySelectorAll('.destaques-item');
  if (!items.length) {
    return;
  }

  var images = document.querySelectorAll('.destaques-image');

  items.forEach(function (item) {
    var trigger = item.querySelector('.destaques-item-trigger');

    trigger.addEventListener('click', function () {
      if (item.classList.contains('is-open')) {
        return;
      }

      var index = item.getAttribute('data-index');

      items.forEach(function (other) {
        var isTarget = other === item;
        other.classList.toggle('is-open', isTarget);
        other.querySelector('.destaques-item-trigger').setAttribute('aria-expanded', String(isTarget));
      });

      images.forEach(function (img) {
        img.classList.toggle('is-active', img.getAttribute('data-index') === index);
      });
    });
  });
})();

// Tabs de funcionalidades com imagem e lista que trocam por estado
(function () {
  var tabs = document.querySelectorAll('.funcionalidades-tab');
  if (!tabs.length) {
    return;
  }

  var images = document.querySelectorAll('.funcionalidades-image');
  var lists = document.querySelectorAll('.funcionalidades-list');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      if (tab.classList.contains('is-active')) {
        return;
      }

      var index = tab.getAttribute('data-index');

      tabs.forEach(function (other) {
        var isTarget = other === tab;
        other.classList.toggle('is-active', isTarget);
        other.setAttribute('aria-selected', String(isTarget));
      });

      images.forEach(function (img) {
        img.classList.toggle('is-active', img.getAttribute('data-index') === index);
      });

      lists.forEach(function (list) {
        list.classList.toggle('is-active', list.getAttribute('data-index') === index);
      });
    });
  });
})();
