const wrap = document.querySelectorAll(".tab-pane-content-item-wrap")

wrap.forEach(el => {
    const toggler = el.querySelector(".wrap-toggler")

    toggler.addEventListener("click", () => {
        el.classList.toggle("active")
    })
})
