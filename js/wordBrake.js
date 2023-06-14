let collectionElement = document.getElementById("collection");
let collectionText = collectionElement.innerHTML;

let words = collectionText.split(",");

let longestWord = "";

for (let i = 0; i < words.length; i++) {
    let currentWord = words[i].trim();
    if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
    }
}

if (longestWord.length * 10 > collectionElement.offsetWidth) {

    let brElement = document.createElement("br");
    collectionElement.parentNode.insertBefore(brElement, collectionElement);
}

