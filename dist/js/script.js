// hamburger nav anim

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// navbar fixed
window.onscroll = () => {
    const header = document.querySelector('header');
    this.scrollY > 20 ? header.classList.add('navbar-fixed') : header.classList.remove('navbar-fixed');
}