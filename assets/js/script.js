// Detect system preference for dark mode
window.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
  }
});

// Manual toggle dark mode on click
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// --- Extra: Smooth scroll to top when "Back to Top" icon clicked
document.querySelectorAll('a[href="#top"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// --- Extra Placeholder: Form Handling for "Hire Me" page (we will expand later)
const hireForm = document.getElementById('hireForm');
if (hireForm) {
  hireForm.addEventListener('submit', (e) => {
    e.preventDefault();
    hireForm.style.display = 'none';

    const thankYouMessage = document.createElement('h2');
    thankYouMessage.textContent = "Thank you for reaching out!";
    document.querySelector('.form-container').appendChild(thankYouMessage);
  });
}
