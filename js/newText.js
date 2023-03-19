// const textElement = document.getElementById('my-text');
// const text = textElement.innerText;
// textElement.innerHTML = '';
//
// for (let i = 0; i < text.length; i++) {
//     const span = document.createElement('span');
//     span.innerText = text[i];
//     span.style.backgroundColor = 'yellow';
//     textElement.appendChild(span);
// }
//
//
//
// function animateText() {
//     const spans = textElement.querySelectorAll('span');
//     let index = 0;
//
//     const intervalId = setInterval(() => {
//         spans[index].style.opacity = 1;
//         spans[index].style.opacity = 'yellow';
//         index++;
//
//         if (index === spans.length) {
//             clearInterval(intervalId);
//             setTimeout(() => {
//                 for (let i = 0; i < spans.length; i++) {
//                     setTimeout(() => {
//                         // spans[i].style.opacity = 0;
//                         spans[spans.length - i - 1].style.opacity = 0;
//                         spans[spans.length - i - 1].style.background = 'yellow';
//                     }, i * 50);
//                 }
//                 setTimeout(() => {
//                     animateText(); // вызов функции для повторения анимации
//                 }, spans.length * 50);
//             }, 1000);
//         }
//     }, 50);
// }
//
// animateText();


// const textElement = document.getElementById('my-text');
// const text = textElement.innerText;
// textElement.innerHTML = '';
//
// for (let i = 0; i < text.length; i++) {
//     const span = document.createElement('span');
//     span.innerText = text[i];
//     span.style.backgroundColor = 'yellow';
//     textElement.appendChild(span);
//
//     if (i === text.length - 1) {
//         const cursorSpan = document.createElement('span');
//         cursorSpan.innerText = '|';
//         span.appendChild(cursorSpan);
//     }
// }
//
//
// function animateText() {
//     const spans = textElement.querySelectorAll('span');
//     let index = 0;
//
//     const intervalId = setInterval(() => {
//         spans[index].style.opacity = 1;
//         spans[index].style.opacity = 'yellow';
//         index++;
//
//         if (index === spans.length) {
//             clearInterval(intervalId);
//             setTimeout(() => {
//                 for (let i = 0; i < spans.length; i++) {
//                     setTimeout(() => {
//                         // spans[i].style.opacity = 0;
//                         spans[spans.length - i - 1].style.opacity = 0;
//                         spans[spans.length - i - 1].style.background = 'yellow';
//                     }, i * 50);
//                 }
//                 setTimeout(() => {
//                     animateText(); // вызов функции для повторения анимации
//                 }, spans.length * 50);
//             }, 1000);
//         }
//     }, 50);
// }
//
// animateText();





