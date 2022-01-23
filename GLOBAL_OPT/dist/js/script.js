'use strict';

function initMap() {
    let opt = {
        center: {
            lat: 55.748381770092365,
            lng: 37.62722999867739
        },
        zoom: 16
    };

    let map = new google.maps.Map(document.getElementById("map"), opt);

    let image = 'icons/map-icon.png';
    let marker = new google.maps.Marker({
        position: opt.center,
        map: map,
        icon: image
    });
}

const headerNav = document.querySelector('.header__nav');
const headerBurger = document.querySelector('.header__burger');

headerBurger.addEventListener('click', () => {
    headerNav.classList.toggle('active');
    headerBurger.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function () {
    const reviewsItems = document.querySelectorAll('.reviews__item');

    reviewsItems.forEach((item) => {
        item.addEventListener('click', (e) => {
            for (let i = 0; i < reviewsItems.length; i++) {
                reviewsItems[i].classList.remove('active');
            }

            console.log(e.target.parentElement);

            if (e.target === item || e.target.closest('.reviews__item') === item) {
                item.classList.add('active');
            }
        });
    });

    const headerBtn = document.querySelector('.header .header__btn');
    const footerBtn = document.querySelector('.footer .header__btn');
    const modalWindow = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal__close-wrapper');
    const promoBtn = document.querySelector('.promo__btn');
    const bodyElement = document.querySelector('body');

    function addModalWindow(needButton) {
        needButton.addEventListener('click', () => {
            modalWindow.classList.add('active');
            bodyElement.style.overflow = "hidden";
        });
    }

    addModalWindow(headerBtn);
    addModalWindow(promoBtn);
    addModalWindow(footerBtn);

    modalClose.addEventListener('click', () => {
        modalWindow.classList.remove('active');
        bodyElement.style.overflow = "visible";
    });

    const priceBtn = document.querySelector('.price__btn');
    const priceItem = document.querySelector('.price__item');
    const pricePrevBtn = document.querySelector('.price__about-prev');

    priceBtn.addEventListener('click', () => {
        priceItem.classList.add('active');
    });

    pricePrevBtn.addEventListener('click', () => {
        priceItem.classList.remove('active');
    });
});