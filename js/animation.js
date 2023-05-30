

const items = document.querySelectorAll(".services-content-item")

items.forEach(el => {
    const hiddenContent = el.querySelector(".services-content-item-hidden")

    el.onmouseover = function(){
        hiddenContent.style.height = `${hiddenContent.scrollHeight - 30}px`
        hiddenContent.style.opacity = "1"
        hiddenContent.style.transition = "all 0.4s"
    };

    el.onmouseout = function(){
        hiddenContent.style.height = "0"
        hiddenContent.style.opacity = "0"
        hiddenContent.style.transition = "all 0.4s"
    };
})


