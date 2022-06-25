const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));

// итерация непредсказуема, после i = 4, переходит на i = 0, не понимаю почему
for (let i = 0; i < rotatorCase.length; i++) {

    function round(i) {
        let currentElement = rotatorCase[i]; // обрабатываемый элемент
        let previousElement = rotatorCase[i].previousElementSibling; // предыдущий элемент
        let nextElement = rotatorCase[i].nextElementSibling; // следующий элемент
        // currentElement.style.color = currentElement.dataset.color; // смена цвета шрифта

        if (previousElement === null) { // если предыдущего нет
            // rotatorCase[rotatorCase.length - 1].classList.remove('rotator__case_active');
            // currentElement.classList.add('rotator__case_active'); // добавить класс к обрабатываемому
            return currentElement.style.color = currentElement.dataset.color; // смена цвета шрифта у обрабатываемого элемента
            // return false;
        // } else if (nextElement === null) { // если нет следующего 
        //     previousElement.classList.remove('rotator__case_active'); // у предыдущего удалить класс
        //     currentElement.classList.add('rotator__case_active'); // добавить класс к первому элементу массива 
        //     return false;
        } else {
            previousElement.classList.remove('rotator__case_active'); // у предыдущего удалить класс
            currentElement.classList.add('rotator__case_active'); // добавить класс к обрабатываемому
            return currentElement.style.color = currentElement.dataset.color; // смена цвета шрифта у обрабатываемого элемента
            // return false;
        };
    };

    setInterval(round, 1000 * i, i)
}


 // не работает повторение цикла

// let roundAds = function() {
//     for (let i = 0; i < rotatorCase.length; i++) {

//         setTimeout(function (i) {
//             let currentElement = rotatorCase[i]; // обрабатываемый элемент
//             let previousElement = rotatorCase[i].previousElementSibling; // предыдущий элемент
//             let nextElement = rotatorCase[i].nextElementSibling; // следующий элемент
//             currentElement.style.color = currentElement.dataset.color; // изменение цвета шрифта
            
//             if (i === 0 & rotatorCase[rotatorCase.length - 1].classList.contains('rotator__case_active')) {
//                 rotatorCase[rotatorCase.length - 1].classList.remove('rotator__case_active');
//                 return rotatorCase[0].classList.add('rotator__case_active');
//             } else if (previousElement === null) { // если предыдущего нет
//                 return false;
//             } else if (nextElement === null) { // если нет следующего 
//                 previousElement.classList.remove('rotator__case_active'); // у предыдущего удалить класс
//                 return currentElement.classList.add('rotator__case_active'); // добавить класс к первому элементу массива
//             } else {
//                 previousElement.classList.remove('rotator__case_active'); // у предыдущего удалить класс
//                 return currentElement.classList.add('rotator__case_active'); // добавить класс к следующему
//             };
//         }, 1000 * i, i); // не понимаю почему мс нужно умножать на i? без этого не работает
//     };
// }

// roundAds();