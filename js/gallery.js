const largeWrap = document.querySelector(".gallery-large")
const thumbs = document.querySelectorAll(".gallery-thumb-item")

let count = 0;

thumbs.forEach((el) => {
    if (count < 5) {
        const img = el.querySelector('img')

        const imgCopy = document.createElement('img');
        imgCopy.src = img.src;
        imgCopy.addEventListener("click", () => {
            largeWrap.innerHTML = el.innerHTML
        })

        el.appendChild(imgCopy);
        count++;
    }
})


