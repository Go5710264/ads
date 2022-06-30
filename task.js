const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
let index = 0;

function round(ads, indx) {
    if (indx === 0) { // если индекс = 0 и настоящий эле
        ads.style.color = ads.dataset.color; // смена цвета шрифта
        index++;
    } else {
        let previousElemen = ads.previousElementSibling;
        previousElemen.classList.remove('rotator__case_active');
        ads.classList.add('rotator__case_active');
        ads.style.color = ads.dataset.color; // смена цвета шрифта
        index++;
    };
}

setInterval(() => {
    if(index === rotatorCase.length) {
        rotatorCase[index - 1].classList.remove('rotator__case_active');
        index = 0;
        rotatorCase[index].classList.add('rotator__case_active');
        round(rotatorCase[index], index);
    } else {    
        round(rotatorCase[index], index);
    }
}, 1000);