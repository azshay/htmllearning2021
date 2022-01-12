window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
        menuItem = document.querySelectorAll('.header__menu-element'),
        hamburger = document.querySelector('.header__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger-active');
        menu.classList.toggle('header__menu-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger-active');
            menu.classList.toggle('header__menu-active');
        })
    })
})