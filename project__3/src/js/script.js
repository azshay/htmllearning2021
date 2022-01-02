$(document).ready(function () {
    $('.carousel__elements').slick({
        speed: 1200,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/carousel/carousel__left.png" alt="left-arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/carousel/carousel__right.png" alt="right-arrow"></button>',
        responsive: [{
            breakpoint: 1080,
            settings: {
                arrows: false,
                dots: true
            }
        }]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    showCatalogLink('.catalog__link');
    showCatalogLink('.catalog__link-back');

    function showCatalogLink(className) {
        $(className).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog__header').eq(i).toggleClass('catalog__header_active');
                $('.catalog__list').eq(i).toggleClass('catalog__list_active');
            });
        });
    }

    function changeVisibility(modalName) {
        $(`[data-modal="${modalName}"]`).on('click', function () {
            $(".overlay, #consultation").fadeIn('slow');
        });
    }

    changeVisibility('consultation');

    $('.modal__close').on('click', function () {
        $(".overlay, #consultation").fadeOut('slow');
        $(".overlay, #order").fadeOut('slow');
        $(".overlay, #thanks").fadeOut('slow');
    });

    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__text').text($('.catalog__subtitle').eq(i).text());
            $(".overlay, #order").fadeIn('slow');
        });
    });

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введен адрес почты"
                }
            }
        });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    $("[name='phone']").mask("+7 (999) 999-99-99");

    $('form').submit(function (e) {

        if (!$(this).valid()) {
            return;
        }

        e.preventDefault();
        $.ajax({
            type: "POST",
            url: 'mailer/smart.php',
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");

            $("#consultation, #order").fadeOut();
            $('.overlay, #thanks').fadeIn();

            $('form').trigger('reset');
        });
        return false;
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.arrowUp').fadeIn();
        } else {
            $('.arrowUp').fadeOut();
        }
    });

    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            const hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});