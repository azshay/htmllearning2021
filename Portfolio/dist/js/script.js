const promo__close = document.querySelector('.promo__close-wrapper');
const promo__hamburger = document.querySelector('.promo__hamburger');
const promo__overlay = document.querySelector('.promo__overlay');
const promo__menu = document.querySelector('.promo__menu');

promo__hamburger.addEventListener('click', () => {
    promo__overlay.classList.add('active');
    promo__menu.classList.add('active');
})

promo__close.addEventListener('click', () => {
    promo__overlay.classList.remove('active');
    promo__menu.classList.remove('active');
})

document.querySelectorAll('.promo__menu-item').forEach((item) => {
    item.addEventListener('click', () => {
        promo__overlay.classList.remove('active');
        promo__menu.classList.remove('active');
    })
});

const dashboard__procent = document.querySelectorAll('.skills__dashboard-procent');
const dashboard__readyLine = document.querySelectorAll('.skills__dashboard-ready');

dashboard__procent.forEach((item, i) => {
    dashboard__readyLine[i].style.width = item.innerHTML;
});