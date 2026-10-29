// === NAVIGATION.JS — Toggle mobile menu ===
const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');
navButton.addEventListener('click', () => {
  const isOpen = navButton.classList.toggle('show');
  navButton.setAttribute('aria-expanded', isOpen);
  navBar.classList.toggle('show');
});
document.querySelectorAll('.navigation a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      navBar.classList.remove('show');
      navButton.classList.remove('show');
      navButton.setAttribute('aria-expanded', 'false');
      navButton.querySelectorAll('.hamburger-line').forEach(line => {
        line.style.transform = 'none';
        line.style.opacity = '1';
      });
    }
  });
});