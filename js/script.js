$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        dots: false,
        nav: false,
        nav: false,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
    $('.your-carousel').owlCarousel({
        loop: true,
        dots: false,
        nav: false,
        nav: false,
        margin: 10,
        autoplay: true,
        autoplaySpeed: 1000,
        rtl: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
})