let minValue = parseInt(prompt('Минимальное значение числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное значе числа для игры','100'));
minValue = (minValue < -999) ? -999 : minValue;
maxValue = (maxValue > 999) ? 999 : maxValue;
let minValue2 = minValue || 0;
let maxValue2 = maxValue || 100;

alert(`Загадайте любое целое число от ${minValue2} до ${maxValue2}, а я его угадаю`);
let answerNumber  = Math.floor((minValue2 + maxValue2) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    orderNumber = 1;
    minValue = parseInt(prompt('Минимальное значение числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное значе числа для игры','100'));
    minValue = (minValue < -999) ? -999 : minValue;
    maxValue = (maxValue > 999) ? 999 : maxValue;
    minValue2 = minValue || 0;
    maxValue2 = maxValue || 100;
alert(`Загадайте любое целое число от ${minValue2} до ${maxValue2}, а я его угадаю`);
answerNumber  = Math.floor((minValue2 + maxValue2) / 2);
answerField.innerText = `Вы загадали число ${answerNumber }?`;
orderNumberField.innerText = orderNumber;

gameRun = true;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue2 === maxValue2){
            const phraseRandom = Math.round( Math.random()*2);
            let taskError = ["Вы загадали не правильное число \u{1F914}","Этого не может быть \u{1F928}","А если играть по честному? \u{1F925}"];
            const answerPhrase = (taskError[phraseRandom]);
            answerField.innerText = answerPhrase;

            gameRun = false;
        } else {
            minValue2 = answerNumber  + 1;
            answerNumber  = Math.floor((minValue2 + maxValue2) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random()*2);
            let taskError = [`Вы загадали число ${answerNumber }?`,`Конечно же это число ${answerNumber }?`,`Это легко! Это число ${answerNumber }?`];
            const answerPhrase = (taskError[phraseRandom]);
            answerField.innerText = answerPhrase;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue2 === maxValue2){
            const phraseRandom = Math.round( Math.random()*2);
            let taskError = ["Вы загадали не правильное число \u{1F914}","Этого не может быть \u{1F928}","А если играть по честному? \u{1F925}"];
            const answerPhrase = (taskError[phraseRandom]);
            answerField.innerText = answerPhrase;

            gameRun = false;
        } else {
            maxValue2 = answerNumber  - 1;
            answerNumber  = Math.round((minValue2 + maxValue2) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random()*2);
            let taskError = [`Вы загадали число ${answerNumber }?`,`Конечно же это число ${answerNumber }?`,`Это легко! Это число ${answerNumber }?`];
            const answerPhrase = (taskError[phraseRandom]);
            answerField.innerText = answerPhrase;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random()*2);
        let taskError = ["Я всегда угадываю\n\u{1F60E}","Загадай что-то сложнее \u{1F60A}","Давай еще разок? \u{1F917}"];
        const answerPhrase = (taskError[phraseRandom]);
        answerField.innerText = answerPhrase;

        gameRun = false;
    }
})