//Hamburger Menu Toogle//
document.addEventListener('DOMContentLoaded', () => {
    const navButton = document.getElementById('nav-button');
    const navBar = document.getElementById('nav-bar');

    if (!navButton || !navBar) return;

    //Toogle menu on hamburger click//
    navButton.addEventListener('click', () => {
        const isOpen = navButton.classList.toggle('show');
        navButton.setAttribute('aria-expanded', isOpen);
        navBar.classList.toggle('open');
    });

    //Close menu when link is clicked(for mobile)
    document.querySelectorAll('.navigation a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                navBar.classList.remove('open');
                navButton.classList.remove('show');
                navButton.setAttribute('aria-expanded', 'false');
            }
        });
    });

    //Close menu on Escape Key(for keyboard)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navBar.classList.contains('open')) {
            navBar.classList.remove('open');
            navButton.classList.remove('show');
            navButton.setAttribute('aria-expanded', "false");
            navButton.focus();
        }
    });
});