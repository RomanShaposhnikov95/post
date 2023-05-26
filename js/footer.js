const btnGroup = document.querySelectorAll(".btn-group")

btnGroup.forEach(el => {
    const toggler = el.querySelector(".dd-open")
    const togglerText = el.querySelector(".dd-open span")
    const dropDown = el.querySelector(".dropdown-menu")

    const route = toggler.getAttribute("route")

    const customLi = document.createElement('li')
    const customA = document.createElement('a')
    customA.classList.add("dropdown-item")
    customA.href = route
    customA.innerHTML = togglerText.innerHTML

    customLi.appendChild(customA)
    return dropDown.insertBefore(customLi, dropDown.firstChild)
})

