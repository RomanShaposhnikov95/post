const mediaQuery = window.matchMedia('(max-width: 1300px)')
const levelOneMenu = document.querySelectorAll(".levelOne-li")

const header =  document.querySelector(".header")

const menuToggler = document.querySelector(".header-toggler")

const firstMenu = document.querySelector('.header-content-menu')

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
        document.body.classList.toggle('body-overflow')
    })

    levelOneMenu.forEach(el => {
        const levelOneBtn = el.querySelector(".levelOne-li-btn")
        const levelTwoMenu = el.querySelector(".levelTwo")
        const levelTwoLi = el.querySelectorAll(".levelTwo-li")

        if (!levelTwoMenu) return

        levelOneBtn.addEventListener("click", () => {
            levelTwoMenu.style.right = "0"
            levelTwoMenu.classList.add('active-menu')
            firstMenu.classList.remove('active-menu')
        })

        const liWrap = document.createElement('li')
        liWrap.classList.add("back-menu")
        const backToFirst = document.createElement('button')
        backToFirst.textContent = levelOneBtn.innerHTML
        backToFirst.addEventListener('click', () => {
            levelTwoMenu.style.right = "-100%"
            firstMenu.classList.add('active-menu')
            levelTwoMenu.classList.remove('active-menu')
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

                levelThreeMenu.classList.add('active-menu')
                levelTwoMenu.classList.remove('active-menu')
            })

            levelTwoBtn.classList.add("content-true")

            const liWrapTwo = document.createElement('li')
            liWrapTwo.classList.add("back-menu")
            const backToSecond = document.createElement('button')
            backToSecond.textContent = levelTwoBtn.innerHTML
            backToSecond.addEventListener('click', () => {
                levelThreeMenu.style.right = "-100%"
                levelTwoMenu.classList.add('active-menu')
                levelThreeMenu.classList.remove('active-menu')

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

            const secondMenuLi = el.querySelectorAll('.levelTwo-li')

            secondMenuLi.forEach(two => {
                const thirdMenu = two.querySelector('.levelThree')
                const thirdMenuBtn = el.querySelector('.levelTwo')

                if (thirdMenu) {
                    two.classList.add('content-true-three')
                }


                two.addEventListener("click", () => {
                    two.classList.toggle("show-level")
                })
            })
        }
    })
}




