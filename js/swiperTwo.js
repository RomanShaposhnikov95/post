var thumb = new Swiper(".test", {
    spaceBetween: 10,
    slidesPerGroup: 1,
    slidesPerView: "auto",
    allowTouchMove: false,
    slideToClickedSlide: true,
    loop: true,
    breakpoints: {
        1300: {
            slidesPerView: "4",
        }
    }
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    loop: true,
    allowTouchMove: false,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-prev",
        prevEl: ".swiper-next",
    },
    thumbs: {
        swiper: thumb,
    },
});


swiper.on("slideChange", function () {
    var activeSlideIndex = swiper.realIndex;

    thumb.slideToLoop(activeSlideIndex, 300, false);
});







