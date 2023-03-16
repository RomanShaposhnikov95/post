(function () {

    const headerOpenBtn = document.querySelector(".header-open");
    const headerCloseBtn = document.querySelector(".header-wrap-close");
    const header = document.querySelector(".header");
    const headerWrap = document.querySelector(".header-wrap");


    headerOpenBtn.addEventListener("click", () => {
        header.classList.add("header-show")
        document.body.style.overflow = "hidden"
    })

    const closeMenu = () => {
        header.classList.remove("header-show")
        document.body.style.overflow = "unset"
    }

    headerCloseBtn.addEventListener("click", () => {
        closeMenu()
    })

    document.addEventListener('keydown', function(e) {
        if( e.key === "Escape" ) closeMenu()
    });

    document.addEventListener( 'click', (e) => {
        const withinBoundaries = e.composedPath().includes(headerWrap);
        const withinBoundariesTwo = e.composedPath().includes(headerOpenBtn);

        if ( ! withinBoundaries && ! withinBoundariesTwo ) closeMenu()
    })

})()
