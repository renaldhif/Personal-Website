// hamburger nav anim

const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
});

// navbar fixed


window.onscroll = () => {
    const header = document.querySelector('header');
    this.scrollY > 20 ? header.classList.add('navbar-fixed') : header.classList.remove('navbar-fixed');
}