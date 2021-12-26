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

});