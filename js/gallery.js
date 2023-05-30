(function () {
    const slides = document.querySelector(".gallery-lightbox-thumb");
    const wrapper = document.querySelectorAll(".swiper-slide")
    const current = document.querySelector('#current');
    const modal = document.getElementById("modal");
    const span = document.querySelectorAll(".close");

    const swiper = new Swiper('.swiper-modal', {
        initialSlide: 0,
        loop: true,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    wrapper.forEach((el, index) => {

        const imgWrap = document.createElement("div")
        imgWrap.classList.add("imgWrap")
        imgWrap.setAttribute("data-swiper-length", wrapper.length)

        const wrap = document.createElement("img")
        wrap.src = el.firstElementChild.src
        wrap.addEventListener('click', (e) => {
            imgClick(e, index)
        })

        imgWrap.appendChild(wrap)
        slides.appendChild(imgWrap)

        function imgClick(e, index) {

            if (index === 5) {
                modal.classList.add("modal-show")
                document.body.style.overflowY = "hidden";
            }


            current.src = e.target.src;

            swiper.slideTo(index + 1)
        }

        swiper.on('transitionEnd', function() {
            imgSearchByIndex(swiper.realIndex)
        });


        function imgSearchByIndex(id) {
            if (index === id) {
                current.src = el.firstElementChild.src;
            }
        }
    })


    current.addEventListener("click", () => {
        modal.classList.add("modal-show")
        document.body.style.overflowY = "hidden";
    })


    span.forEach(sp => {
        sp.onclick = function() {
            modal.classList.remove("modal-show")
            document.body.style.overflowY = "unset";
        }
    })
})()
