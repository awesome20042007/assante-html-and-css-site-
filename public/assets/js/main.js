// ==========================================================================
// ASANTE CHURCH INTERNATIONAL — main.js
// 1. Mobile hamburger menu (keyboard friendly)
// 2. Gentle fade-in of sections as you scroll
// 3. Hide events whose date has passed
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {

  // ---------- 1. Mobile menu ----------
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');

  if (menuToggle && mainNav) {
    function setMenu(open) {
      mainNav.classList.toggle('is-open', open);
      menuToggle.classList.toggle('is-active', open);
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }

    menuToggle.addEventListener('click', function () {
      setMenu(!mainNav.classList.contains('is-open'));
    });

    // Close the menu when a link is tapped
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setMenu(false);
      });
    });

    // Close the menu with the Escape key, and return focus to the button
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && mainNav.classList.contains('is-open')) {
        setMenu(false);
        menuToggle.focus();
      }
    });
  }

  // ---------- 2. Fade-in on scroll ----------
  // Skipped for people who asked their device for reduced motion,
  // and for old browsers that don't support IntersectionObserver.
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('IntersectionObserver' in window && !reduceMotion) {
    document.documentElement.classList.add('js');

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });

    document.querySelectorAll('main .section, main .cta-section').forEach(function (el) {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }

  // ---------- 3. Hide events that have already happened ----------
  // Each event card carries its date, like data-event-date="2026-12-13".
  // Once that day has passed, the card disappears by itself, so nobody sees
  // an old event even if the page was not edited.
  const now = new Date();
  const pad = function (n) { return String(n).padStart(2, '0'); };
  const today = now.getFullYear() + '-' + pad(now.getMonth() + 1) + '-' + pad(now.getDate());

  document.querySelectorAll('[data-event-date]').forEach(function (card) {
    if (card.getAttribute('data-event-date') < today) {
      card.remove();
    }
  });

  // If every event on a list has now been hidden, show the friendly message instead.
  document.querySelectorAll('[data-events-list]').forEach(function (list) {
    if (!list.querySelector('[data-event-date]')) {
      const holder = list.parentElement;
      const message = holder.querySelector('[data-no-events]');
      if (message) { message.hidden = false; }
      list.remove();
    }
  });
});
