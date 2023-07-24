const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

const icon = document.querySelector('.navigation-wrapper svg')
const menu = document.querySelector('.menu-list')

icon.addEventListener('click', function() {
    menu.classList.toggle('slide');
});