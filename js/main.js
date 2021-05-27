$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        rtl: true,

        margin: 10,
        center: true,
        items: 2,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    })

    $('.btn-search').click(function() {
        $('nav').addClass('fadein');
        $('.btn-search').addClass('fadeout');
        $('.input-search').addClass('input-open');
        $('button').addClass('btn-open');
        $('form').addClass('open')
    });
    $('.parts').click(function() {
        $('.part').toggleClass('active');
    })
    $('.toggle').click(function() {
        $('.toggle').toggleClass('active');
        $('.slide-bar').addClass('open')
    });
    $(' .close-tab ').click(function() {
        $('.slide-bar').removeClass('open')
    });

    $('button').click(function() {
        $('nav').removeClass('fadein');
        $('.btn-search').removeClass('fadeout');
        $('.input-search').removeClass('input-open');
        $('form').removeClass('open');
        $('button').removeClass('btn-open');
        $('form').removeClass('search-tab');


    });

    $('.search').click(function() {
        $('form').addClass('search-tab');
    });
    $('button').click(function() {
        $('form').removeClass('search-tab');
    });
    // form mediaa
    $('.toggle').click(function() {
        $('.slide-bar').addClass('active');
        $('.toggle').addClass('close');
        $('.close-tab ').addClass('open');

    })
    $(' .close-tab').click(function() {
        $('.slide-bar').removeClass('active');
        $('.toggle').removeClass('close');
        $('.close-tab ').removeClass('open');
    });
    $(' .close-search').click(function() {
        $('form').addClass('open');
        $('.search').addClass('open')
    });
    $('.close-times').click(function() {
        $('form').removeClass('open');
        $('.search').removeClass('open')
    });

    // footer
    $("#plus").click(function() {
        $('ul.list-unstyled.two').toggleClass('open');
        $('#plus-two').toggleClass('two');
    });
    $(".plus").click(function() {
        $('ul.list-unstyled.one').toggleClass('open');
        $('#plus-one').toggleClass('active');
    });

})