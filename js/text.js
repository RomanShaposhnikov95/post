(function () {
    const write = document.querySelectorAll(".textWrap")

    write.forEach(el => {
        const textEl = el.querySelector(".writeText");
        const text = el.querySelector(".text").innerHTML;

        function typeWriter(text, i) {
            if (i < text.length) {
                textEl.innerHTML += text.charAt(i);
                i++;
                setTimeout(function() {
                    typeWriter(text, i);
                }, 100);
            } else {
                setTimeout(function() {
                    deleteText(text, i);
                }, 1000);
            }
        }

        function deleteText(text, i) {
            if (i >= 0) {
                textEl.innerHTML = text.substring(0, i);
                i--;
                setTimeout(function() {
                    deleteText(text, i);
                }, 50);
            } else {
                setTimeout(function() {
                    typeWriter(text, 0);
                }, 1000);
            }
        }

        typeWriter(text, 0);
    })

})()
