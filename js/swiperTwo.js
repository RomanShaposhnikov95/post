
const btn = document.querySelector(".testBtn")

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


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    thumbs: {
        swiper: thumb,
    },
    breakpoints: {
        900: {
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






