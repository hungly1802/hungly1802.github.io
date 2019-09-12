$(function () {

    // Image lazy load
    lozad(".lozad", {
        rootMargin: "300px 0px",
        loaded: function (el) {
            el.classList.add("is-loaded");
        }
    }).observe();
    lozad(".lazy-load-bg", {}).observe();

    // Sticky menu
    /*var header = $('#header');
    var heightHeader = header.height();
    var headerPosition = header.offset().top;
    if ($(window).width() >= 768) {
        if (headerPosition > heightHeader) {
            header.addClass('sticky');
        } else {
            header.removeClass('sticky');
        }

        $(window).scroll(function () {
            if ($(this).scrollTop() > heightHeader) {
                header.addClass('sticky').find('.header-top').children('.container').slideUp(400);
            } else {
                header.removeClass('sticky').find('.header-top').children('.container').slideDown(400);
            }
        });
    }*/

   /* $('#site-wrap').css('padding-top', heightHeader);
    $(window).resize(function () {
        var heightHeader = header.height();
        $('#site-wrap').css('padding-top', heightHeader);
    });

    $(window).ready(function () {
        var heightHeader = header.height();
        $('#site-wrap').css('padding-top', heightHeader);
    });*/

    // Slideshow
    $('.slider-show').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        autoHeight: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        smartSpeed: 900,
        navSpeed: 900,
        lazyLoad: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        freeDrag: false
    });

    $('.owl-services').owlCarousel({
        dots: true,
        nav: false,
        autoplay: true,
        loop: true,
        lazyLoad: true,
        center: true,
        smartSpeed: 900,
        navSpeed: 900,
        margin: 30,
        responsive: {
            0: {items: 1},
            600: {items: 2},
            1024: {items: 3},
            1300: {items: 3}
        }
    });

    $('.owl-customers').owlCarousel({
        dots: true,
        nav: false,
        autoplay: true,
        loop: true,
        lazyLoad: true,
        smartSpeed: 900,
        navSpeed: 900,
        margin: -350,
        autoplayHoverPause: true,
        center: true,
        responsive: {
            0: {items: 1},
            600: {items: 2},
            1024: {items: 3},
            1300: {items: 3}
        },
    });
})