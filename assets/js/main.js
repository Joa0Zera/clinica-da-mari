// Menu mobile
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      nav.classList.remove('active');
    });
  });
}

// Header com sombra ao rolar
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (header) {
    header.style.boxShadow = window.scrollY > 20
      ? '0 4px 20px rgba(36, 56, 44, 0.12)'
      : '0 2px 12px rgba(36, 56, 44, 0.06)';
  }
});

// Scroll reveal
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => observer.observe(el));

// Ano no footer
const anoEl = document.getElementById('ano');
if (anoEl) {
  anoEl.textContent = new Date().getFullYear();
}
