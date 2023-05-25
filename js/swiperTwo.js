var thumb = new Swiper(".test", {
    spaceBetween: 10,
    slidesPerGroup: 1,
    slidesPerView: "auto",
    allowTouchMove: false,
    slideToClickedSlide: true,
    loop: true,
    speed: 10,
    breakpoints: {
        1300: {
            slidesPerView: "4",
        }
    }
});

// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 10,
//     navigation: {
//         nextEl: ".swiper-prev",
//         prevEl: ".swiper-next",
//     },
//     pagination: {
//         el: '.swiper-pagination',
//     },
//     centeredSlides: true,
//     slidesPerView: 'auto',
//     autoHeight: true,
//     effect: "slide",
//     breakpoints: {
//         750: {
//             loop: true,
//             effect: "fade",
//             pagination: false,
//             slidesPerView: 1,
//             centeredSlides: false,
//             autoHeight: false,
//         },
//
//     }
// });

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    thumbs: {
        swiper: thumb,
    },
    breakpoints: {
        750: {
            allowTouchMove: false,
            effect: "fade",
            loop: true,
            speed: 10,
            navigation: {
                nextEl: ".swiper-prev",
                prevEl: ".swiper-next",
            },
            thumbs: {
                swiper: thumb,
            },
        },

        1: {
            allowTouchMove: true,
            effect: "slide",
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: false,
            autoHeight: true,
            pagination: {
                el: '.swiper-pagination',
            },
        }
    }
});


swiper.on("slideChange", function () {
    var activeSlideIndex = swiper.realIndex;

    thumb.slideToLoop(activeSlideIndex, 300, false);
});









