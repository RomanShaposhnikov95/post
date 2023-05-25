const modal = document.querySelectorAll('.modal-custom');
const btnOpen = document.querySelectorAll('.btn-modal');





btnOpen.forEach(btn => {

    btn.addEventListener("click", () => {
        modal.forEach(el => {
            const data = el.getAttribute('data');
            const id = btn.getAttribute('id');

            if (data === id) {
                el.classList.add("show-modal")
            }
        })
    })

})

modal.forEach(el => {
    const btnClose = el.querySelector('.close-modal');
    const wrap = el.querySelector('.modal-custom-wrap');

    btnClose.addEventListener("click", () => {
        el.classList.remove("show-modal")
    })

    el.addEventListener( 'click', (e) => {
        const withinBoundaries = e.composedPath().includes(wrap);

        if ( ! withinBoundaries ) {
            el.classList.remove("show-modal")
        }
    })

})


