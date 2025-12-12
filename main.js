const navToggle = document.getElementById('navToggle');
const body = document.body;

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = body.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
}
