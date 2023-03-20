class AnimatedText {
    constructor(element) {
        this.element = element;
        this.animateText = this.animateText.bind(this);
    }

    init() {
        const textElements = this.element.querySelectorAll('.my-text');

        textElements.forEach((textElement) => {
            const text = textElement.innerText;
            textElement.innerHTML = '';

            for (let i = 0; i < text.length; i++) {
                const span = document.createElement('span');
                span.innerText = text[i];
                span.classList.add('animated-text-char');
                span.style.backgroundColor = textElement.classList.contains("my-text-bg") ? "#0F0F0F" : "transparent"
                textElement.appendChild(span);

                if (i === text.length - 1) {
                    const cursorSpan = document.createElement('span');
                    // cursorSpan.innerText = '|';
                    cursorSpan.classList.add('animated-text-cursor');
                    span.appendChild(cursorSpan);
                }
            }

            this.animateText(textElement);
        });
    }

    animateText(textElement) {
        const spans = textElement.querySelectorAll('.animated-text-char');
        let index = 0;

        const intervalId = setInterval(() => {
            spans[index].style.opacity = 1;
            spans[index].style.opacity = textElement.classList.contains("my-text-bg") ? "#0F0F0F" : "transparent";
            index++;

            if (index === spans.length) {
                clearInterval(intervalId);
                setTimeout(() => {
                    for (let i = 0; i < spans.length; i++) {
                        setTimeout(() => {
                            // spans[i].style.opacity = 0;
                            spans[spans.length - i - 1].style.opacity = 0;
                            spans[spans.length - i - 1].style.background = textElement.classList.contains("my-text-bg") ? "#0F0F0F" : "transparent";
                        }, i * 50);
                    }
                    setTimeout(() => {
                        this.animateText(textElement);
                    }, spans.length * 50);
                }, 1000);
            }
        }, 50);
    }
}



window.addEventListener("DOMContentLoaded", (event) => {
    const animatedText = new AnimatedText(document);
    animatedText.init();
});

