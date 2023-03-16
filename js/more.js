(function () {

    const more = document.querySelectorAll(".more");

    more.forEach(el => {
        const hideContent = el.querySelector(".more-hidden");
        const moreButton = el.querySelector(".link");

        if (hideContent.innerHTML.trim().length <= 0) {
            moreButton.style.display = "none"
        }

        moreButton.addEventListener("click", () => {
            hideContent.classList.toggle("more-hide")
            hideContent.classList.toggle("more-show")
        })

    })

})()
