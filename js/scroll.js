const allWrap = document.querySelectorAll(".tab-pane-content-item-wrap-data-container")

allWrap.forEach(el => {
    const content = el.querySelector('.tab-pane-content-item-wrap-data-content')

    if (el.scrollHeight > el.clientHeight) {
        el.classList.add("scroll")

        content.addEventListener("touchstart", () => {
            el.classList.remove("scroll")
        })
    } else {
        el.classList.remove("scroll")
    }


})
