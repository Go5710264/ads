const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));

// for (i = 0; i < rotatorCase.length; i++) {
//     setInterval(function(i) {
//         let previousElement = rotatorCase[i].previousElementSibling;
//         previousElement.classList.remove('rotator__case_active');
//         rotatorCase[i].classList.add('rotator__case_active');
//     }, 1000)
// }



// работает, но не возвращает первую строку и не начинает цикл заново
for (let i = 0; i < rotatorCase.length; i++) {
    setTimeout(function (i) {
        let previousElement = rotatorCase[i].previousElementSibling; // доступ к предыдущему элементу
        let nextElement = rotatorCase[i].nextElementSibling; // доступ к следующему элементу
        rotatorCase[i].classList.remove('rotator__case_active'); // у первого удалить класс

        if (previousElement === null) { // если предыдущего нет
            return nextElement.classList.add('rotator__case_active'); // к следущему добавить класс
        } else if (nextElement === null) { // если нет следующего 
            return rotatorCase[0].classList.add('rotator__case_active'); // добавить класс к первому элементу массива
        } else {
            return nextElement.classList.add('rotator__case_active'); // добавить класс к следующему
        };
    }, 1000 * i, i);
};
//