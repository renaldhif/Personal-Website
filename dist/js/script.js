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

// smooth scroll
const goHome = document.querySelector('#home');
const goAbout = document.querySelector('#about');
const goSkills = document.querySelector('#skills');
const goPorto = document.querySelector('#portofolio');
const goContact = document.querySelector('#contact');

goHome.scrollIntoView({ behavior: 'smooth' });
goAbout.scrollIntoView({ behavior: 'smooth' });
goSkills.scrollIntoView({ behavior: 'smooth' });
goPorto.scrollIntoView({ behavior: 'smooth' });
goContact.scrollIntoView({ behavior: 'smooth' });