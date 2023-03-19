var thumb = new Swiper(".thumb", {
    spaceBetween: 10,
    slidesPerGroup: 1,
    slidesPerView: "auto",
    allowTouchMove: false,
    slideToClickedSlide: true,
    loop: true,
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







