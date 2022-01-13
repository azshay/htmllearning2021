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

$(document).ready(function () {
    $('#contacts__form__id').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            checkbox: {
                required: true,
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Введите {0} символа!")
            },
            email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильно введен адрес почты"
            },
            checkbox: {
                required: ''
            }
        }
    });
});

const checkbox = document.querySelector(".contacts__checkbox");

document.querySelector(".contacts__submit .btn").addEventListener('click', function () {
    if (checkbox.checked === false) {
        checkbox.parentElement.classList.add("active");
    }

    setTimeout(removeActiveClass, 2000);
});

function removeActiveClass() {
    checkbox.parentElement.classList.remove("active");
}