'use strict';

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

    function initMap() {
        var opt = {
            center: {
                lat: 55.748381770092365,
                lng: 37.62722999867739
            },
            zoom: 16
        };

        var map = new google.maps.Map(document.getElementById("map"), opt);

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
});