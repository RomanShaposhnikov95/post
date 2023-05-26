const mediaQuery = window.matchMedia('(max-width: 1300px)')
const levelOneMenu = document.querySelectorAll(".levelOne-li")

const header =  document.querySelector(".header")

const menuToggler = document.querySelector(".header-toggler")

window.addEventListener('scroll', function() {
    if (window.scrollY > 30) {
        header.classList.add("scroll")
    } else if (window.scrollY < 10 ){
        header.classList.remove("scroll")
    }
});

if (mediaQuery.matches) {
    menuToggler.addEventListener("click", () => {
        header.classList.toggle('header-show')
    })

    levelOneMenu.forEach(el => {
        const levelOneBtn = el.querySelector(".levelOne-li-btn")
        const levelTwoMenu = el.querySelector(".levelTwo")
        const levelTwoLi = el.querySelectorAll(".levelTwo-li")

        if (!levelTwoMenu) return

        levelOneBtn.addEventListener("click", () => {
            levelTwoMenu.style.right = "0"
        })

        const liWrap = document.createElement('li')
        liWrap.classList.add("back-menu")
        const backToFirst = document.createElement('button')
        backToFirst.textContent = levelOneBtn.innerHTML
        backToFirst.addEventListener('click', () => {
            levelTwoMenu.style.right = "-100%"
        })
        liWrap.appendChild(backToFirst)
        levelTwoMenu.insertBefore(liWrap, levelTwoMenu.firstChild)

        levelOneBtn.classList.add("content-true")

        levelTwoLi.forEach(two => {
            const levelTwoBtn = two.querySelector(".levelTwo-li-btn")
            const levelThreeMenu = two.querySelector(".levelThree")

            if (!levelThreeMenu) return

            levelTwoBtn.addEventListener("click", () => {
                levelThreeMenu.style.right = "0"
            })

            levelTwoBtn.classList.add("content-true")

            const liWrapTwo = document.createElement('li')
            liWrapTwo.classList.add("back-menu")
            const backToSecond = document.createElement('button')
            backToSecond.textContent = levelTwoBtn.innerHTML
            backToSecond.addEventListener('click', () => {
                levelThreeMenu.style.right = "-100%"
            })
            liWrapTwo.appendChild(backToSecond)
            levelThreeMenu.insertBefore(liWrapTwo, levelThreeMenu.firstChild)
        })

    })
} else {
    levelOneMenu.forEach(el => {
        const secondMenu = el.querySelector('.levelTwo')
        const btn = el.querySelector('.levelOne-li-btn')

        if (secondMenu) {
            btn.classList.add('content-true')
        }
    })
}


