const wrap = document.querySelectorAll('.new-header-wrap-list-dropdown')

wrap.forEach(el => {
    const firstStepBtn = el.querySelector('.new-header-wrap-list-dropdown-title')
    const secondStepBtn = el.querySelector('.ew-header-wrap-list-dropdown-list-wrap-title')

    // const firstLevel = el.querySelector('.new-header-wrap-list-dropdown-title')
    const secondLevel = el.querySelector('.new-header-wrap-list-dropdown-list')
    const thirdLevel = el.querySelector('.new-header-wrap-list-dropdown-list-wrap')


    firstStepBtn.addEventListener('click', () => {
        secondLevel.style.left = '0'

    })
})
