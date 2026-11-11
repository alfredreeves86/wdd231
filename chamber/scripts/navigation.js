//Hamburger Menu Toogle//
const hamburger = document.getElementById('nav-button');
const nav = document.getElementById('nav-bar');

if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
        const expanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !expanded);
        nav.classList.toggle('show');
    });

    //close menu when clicking a link//
    nav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            hamburger.setAttribute('aria-expanded', 'false');
            nav.classList.remove('show');
        });
    });
}