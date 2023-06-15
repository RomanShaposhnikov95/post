let collectionElement = document.querySelectorAll(".collection");


collectionElement.forEach(el => {
    let myText = el.querySelector(".element")
    let collectionText = myText.getAttribute("data-text");
    const arr = JSON.parse(collectionText)

    let hideText = el.querySelector(".hide-text")

    let longestWord = "";

    for (let i = 0; i < arr.length; i++) {
        let currentWord = arr[i].trim();
        if (currentWord.length > longestWord.length) {
            longestWord = currentWord;
        }
    }

    hideText.innerHTML = longestWord
    el.style.height = `${el.offsetHeight}px`
    hideText.style.display = `none`
})



