const elements = document.querySelectorAll(".element")


elements.forEach(el => {
    const stringArr = el.getAttribute("data-text")
    let typed = new Typed(el, {
        strings:  JSON.parse(stringArr),
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        smartBackspace: false
    });
})
