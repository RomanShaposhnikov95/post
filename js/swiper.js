(function () {
    let swiper = new Swiper(".mySwiperSmall", {
        spaceBetween: 10,
        slidesPerView: "auto",
        allowTouchMove: false,
        loop: true,
        pagination: false,
        speed: 100,
        navigation: {
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
        },
        lazy: {
            loadPrevNext: true,
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
            },

            400: {
                slidesPerView: "2",
            },
            500: {
                slidesPerView: "auto",
            },
            1300: {
                slidesPerView: "4",
            },
        },
        on: {
            realIndexChange: function () {
                let index = this.realIndex + 1;
                let current_data = this.slides[index].id;

                console.log(index,current_data); // получить index и id текущего слайда
            }
        },
    });
})()
