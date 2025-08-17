// Show current year in footer
document.getElementById('y').textContent = new Date().getFullYear();

// Mobile dropdown toggles (click to open/close)
document.querySelectorAll('.dropdown .dropbtn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // Only use click toggle on small screens
    if (window.matchMedia('(max-width: 720px)').matches) {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      const menu = btn.nextElementSibling;
      if (menu) menu.hidden = expanded;
      e.preventDefault();
    }
  });
});
