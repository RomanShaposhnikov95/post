class AnimatedText {
    constructor(elements) {
        this.elements = elements;
        this.animateText = this.animateText.bind(this);
    }

    init() {
        this.elements.forEach((element) => {
            const text = JSON.parse(element.getAttribute('data-text'));
            console.log(text);
            element.innerHTML = '';

            this.animateText(element, text, 0);
        });
    }

    animateText(element, text, index) {
        const currentText = text[index];
        const textChars = currentText.split('');
        element.innerHTML = '';

        for (let i = 0; i < textChars.length; i++) {
            const span = document.createElement('span');
            span.innerText = textChars[i];
            span.classList.add('animated-text-char');
            element.appendChild(span);
        }

        const spans = element.querySelectorAll('.animated-text-char');
        let charIndex = 0;

        const showChar = () => {
            spans[charIndex].style.opacity = 1;
            charIndex++;

            if (charIndex === spans.length) {
                clearInterval(intervalId);

                setTimeout(() => {
                    for (let i = spans.length - 1; i >= 0; i--) {
                        setTimeout(() => {
                            spans[i].style.opacity = 0;
                        }, (spans.length - i - 1) * 50);
                    }

                    if (index + 1 < text.length) {
                        setTimeout(() => {
                            this.animateText(element, text, index + 1);
                        }, (spans.length + 1) * 50);
                    } else {
                        setTimeout(() => {
                            this.animateText(element, text, 0);
                        }, 2000);
                    }
                }, 1000);
            }
        };

        spans.forEach((span) => {
            span.style.opacity = 0;
        });

        const intervalId = setInterval(showChar, 50);
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    const elements = document.querySelectorAll('.my-text-test');
    const animatedText = new AnimatedText(elements);
    animatedText.init();
});
