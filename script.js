const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#primary-menu');
const yearEl = document.querySelector('#year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navMenu.dataset.open = String(!expanded);
    navToggle.classList.toggle('is-open', !expanded);
  });
}

if (navToggle) {
  navToggle.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.dataset.open = 'false';
      navToggle.classList.remove('is-open');
    }
  });
}

document.addEventListener('click', (event) => {
  if (!navToggle || !navMenu) return;

  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  if (!expanded) return;

  const isInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
  if (!isInsideNav) {
    navToggle.setAttribute('aria-expanded', 'false');
    navMenu.dataset.open = 'false';
    navToggle.classList.remove('is-open');
  }
});
