(function () {
    const mediaQuery = window.matchMedia('(min-width: 1100px)')
    const head = document.querySelector('.head')

    if (mediaQuery.matches) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 30) {
                head.style.padding = '10px 20px 10px 30px'
            } else if (window.scrollY < 10 ){
                head.style.padding = '20px 20px 20px 30px'
            }
        });
    }


    const dropdown = document.querySelectorAll('.mobile-menu-dropdown');
    const firstMenu = document.querySelector('.mobile-menu')
    const openSvg = document.querySelector('.open-svg')
    const closeSvg = document.querySelector('.close-svg')
    const overlay = document.querySelector('.overlay')
    const open = document.querySelector('.head-open')

    open.addEventListener("click", () => {
        firstMenu.classList.toggle('show-menu')
        openSvg.classList.toggle('d-none')
        closeSvg.classList.toggle('d-none')
        overlay.classList.toggle('d-none')
        document.body.classList.toggle('body-active')
    })

    dropdown.forEach(el => {
        const nextToSecondMenu = el.querySelector('.nextToSecondMenu')
        const insideMenu = el.querySelectorAll('.menu-li')
        const backToFirstMenu = el.querySelector('.backToFirstMenu')
        const secondMenu = el.querySelector('.mobile-menu-dropdown-list')

        if (!nextToSecondMenu  || !backToFirstMenu) {
            return
        }

        nextToSecondMenu.addEventListener('click', () => {
            secondMenu.style.left = '0'
            backToFirstMenu.innerHTML = nextToSecondMenu.textContent
        })

        backToFirstMenu.addEventListener('click', () => {
            secondMenu.style.left = '100%'
        })

        insideMenu.forEach(m => {
            const nextToThirdMenu = m.querySelector('.nextToThirdMenu')
            const backToSecondMenu = m.querySelector('.backToSecondMenu')
            const thirdMenu = m.querySelector('.mobile-menu-dropdown-list-inside')

            nextToThirdMenu.addEventListener('click', () => {
                thirdMenu.style.left = '0'
                backToSecondMenu.innerHTML = nextToThirdMenu.textContent
            })

            backToSecondMenu.addEventListener('click', () => {
                thirdMenu.style.left = '100%'
            })
        })
    })


    if ('ontouchstart' in window) {
        window.addEventListener("DOMContentLoaded", (event) => {
            dropdown.forEach(el => {
                const nextToSecondMenu = el.querySelector('.nextToSecondMenu');
                const menuList = el.querySelector('.mobile-menu-dropdown-list');

                if (menuList) {
                    nextToSecondMenu.classList.add("ifChild")
                }
            })
        });
    } else {

        dropdown.forEach(el => {
            const menuList = el.querySelector('.mobile-menu-dropdown-list');

            if (menuList) {
                el.addEventListener("mouseover", () => {
                    overlay.classList.remove('d-none')
                })

                el.addEventListener("mouseout", () => {
                    overlay.classList.add('d-none')
                })
            }

        })
    }

})()
