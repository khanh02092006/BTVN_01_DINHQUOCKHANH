const menuBtn = document.querySelector('.sidebar-btn');
const navMenu = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});