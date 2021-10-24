const link = document.querySelectorAll('.nav-link');
const mobileLink = document.querySelectorAll('.mobile-link');
const btn = document.getElementById('nav-btn');
const mobileNav = document.querySelector('.mobile-nav');
const arrowIcon = document.querySelectorAll('.mobile-nav-icon');

btn.addEventListener('click', () => {
    mobileNav.classList.toggle('open-nav');
    document.querySelector('#closeIcon').classList.toggle('open-nav');
    document.querySelector('#navIcon').classList.toggle('closeIcon');
});

link.forEach(links => {
    links.addEventListener('click', (e) => {
        const menu = e.target.parentElement.nextElementSibling;
        menu.classList.toggle('show');
        const icon = e.target.nextElementSibling;
        icon.classList.toggle('rotate');
    });
});

mobileLink.forEach(mobile => {
    mobile.addEventListener('click', (e) => {
        const mobileMenu = e.target.parentElement.nextElementSibling;
        mobileMenu.classList.toggle('show-nav');
        const icon = e.target.nextElementSibling;
        icon.classList.toggle('rotate');
    });
});
