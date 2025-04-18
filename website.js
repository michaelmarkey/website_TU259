const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Toggle menu on click
toggle.addEventListener('click', () => {
  const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!isExpanded));
  menu.classList.toggle('show');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !toggle.contains(e.target)) {
    menu.classList.remove('show');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

// Reset menu state on window resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 950) {
    menu.classList.remove('show');
    toggle.setAttribute('aria-expanded', 'false');
  }
});
