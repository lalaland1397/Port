// Smooth scroll for in-page anchors
document.addEventListener('click', function (e) {
  const target = e.target.closest('a[href^="#"]');
  if (!target) return;
  const id = target.getAttribute('href');
  if (!id || id === '#') return;
  const el = document.querySelector(id);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Theme toggle with localStorage
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  root.setAttribute('data-theme', savedTheme);
  themeToggle && (themeToggle.textContent = savedTheme === 'dark' ? '☀️ 라이트모드' : '🌙 다크모드');
}

themeToggle?.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') || 'light';
  const next = current === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  themeToggle.textContent = next === 'dark' ? '☀️ 라이트모드' : '🌙 다크모드';
});

// Print to PDF button
document.getElementById('printBtn')?.addEventListener('click', () => {
  window.print();
});


