const textElement = document.getElementById("w");
// Получаем сам текст
const text = textElement.innerHTML;
// Очищаем элемент
textElement.innerHTML = "";

// Устанавливаем задержку между печатью и удалением символов
const delay = 100;

// Функция для печати текста
function printText(i) {
    // Проверяем, чтобы индекс не выходил за пределы текста
    if (i < text.length) {
        // Добавляем один символ к текущему тексту
        textElement.innerHTML += text.charAt(i);
        // Устанавливаем задержку перед следующим символом
        setTimeout(function() {
            printText(i + 1);
        }, delay);
    } else {
        // Устанавливаем задержку перед удалением текста
        setTimeout(function() {
            deleteText(text.length - 1);
        }, 1000);
    }
}

// Функция для удаления текста
function deleteText(i) {
    // Проверяем, чтобы индекс не выходил за пределы текста
    if (i >= 0) {
        // Удаляем один символ из текущего текста
        textElement.innerHTML = text.substring(0, i);
        // Устанавливаем задержку перед удалением следующего символа
        setTimeout(function() {
            deleteText(i - 1);
        }, delay);
    } else {
        // Печатаем текст заново
        printText(0);
    }
}

// Начинаем анимацию
printText(0);
