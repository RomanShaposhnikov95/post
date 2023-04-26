var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    loop: true,
    allowTouchMove: false,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-prev",
        prevEl: ".swiper-next",
    },
});
