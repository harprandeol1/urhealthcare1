
// Mobile nav toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.nav');
if (mobileToggle && nav) {
  mobileToggle.addEventListener('click', ()=> nav.classList.toggle('open'));
}

// Dropdowns
document.querySelectorAll('.dropdown > button').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const dd = btn.parentElement;
    dd.classList.toggle('open');
  });
});
document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
});

// FAQ toggles
document.querySelectorAll('.faq-item button').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const open = item.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    const sym = btn.querySelector('[data-symbol]');
    if (sym) sym.textContent = open ? '–' : '+';
  });
});
