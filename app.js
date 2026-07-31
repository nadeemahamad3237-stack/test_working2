```javascript
let display = document.getElementById('display');
let clear = document.getElementById('clear');
let deleteButton = document.getElementById('delete');
let equals = document.getElementById('equals');
let add = document.getElementById('add');
let subtract = document.getElementById('subtract');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
let num7 = document.getElementById('num-7');
let num8 = document.getElementById('num-8');
let num9 = document.getElementById('num-9');
let num4 = document.getElementById('num-4');
let num5 = document.getElementById('num-5');
let num6 = document.getElementById('num-6');
let num1 = document.getElementById('num-1');
let num2 = document.getElementById('num-2');
let num3 = document.getElementById('num-3');
let num0 = document.getElementById('num-0');
let decimal = document.getElementById('decimal');

let currentNumber = '';
let previousNumber = '';
let operator = null;

clear.addEventListener('click', () => {
    currentNumber = '';
    previousNumber = '';
    operator = null;
    display.value = '';
});

deleteButton.addEventListener('click', () => {
    currentNumber = currentNumber.slice(0, -1);
    display.value = currentNumber;
});

equals.addEventListener('click', () => {
    if (currentNumber !== '' && previousNumber !== '') {
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(previousNumber) + parseFloat(currentNumber);
                break;
            case '-':
                result = parseFloat(previousNumber) - parseFloat(currentNumber);
                break;
            case '*':
                result = parseFloat(previousNumber) * parseFloat(currentNumber);
                break;
            case '/':
                result = parseFloat(previousNumber) / parseFloat(currentNumber);
                break;
            default:
                result = 0;
        }
        display.value = result.toString();
        currentNumber = result.toString();
        previousNumber = '';
        operator = null;
    }
});

add.addEventListener('click', () => {
    if (currentNumber !== '') {
        previousNumber = currentNumber;
        operator = '+';
        currentNumber = '';
        display.value = '';
    }
});

subtract.addEventListener('click', () => {
    if (currentNumber !== '') {
        previousNumber = currentNumber;
        operator = '-';
        currentNumber = '';
        display.value = '';
    }
});

multiply.addEventListener('click', () => {
    if (currentNumber !== '') {
        previousNumber = currentNumber;
        operator = '*';
        currentNumber = '';
        display.value = '';
    }
});

divide.addEventListener('click', () => {
    if (currentNumber !== '') {
        previousNumber = currentNumber;
        operator = '/';
        currentNumber = '';
        display.value = '';
    }
});

num7.addEventListener('click', () => {
    currentNumber += '7';
    display.value = currentNumber;
});

num8.addEventListener('click', () => {
    currentNumber += '8';
    display.value = currentNumber;
});

num9.addEventListener('click', () => {
    currentNumber += '9';
    display.value = currentNumber;
});

num4.addEventListener('click', () => {
    currentNumber += '4';
    display.value = currentNumber;
});

num5.addEventListener('click', () => {
    currentNumber += '5';
    display.value = currentNumber;
});

num6.addEventListener('click', () => {
    currentNumber += '6';
    display.value = currentNumber;
});

num1.addEventListener('click', () => {
    currentNumber += '1';
    display.value = currentNumber;
});

num2.addEventListener('click', () => {
    currentNumber += '2';
    display.value = currentNumber;
});

num3.addEventListener('click', () => {
    currentNumber += '3';
    display.value = currentNumber;
});

num0.addEventListener('click', () => {
    currentNumber += '0';
    display.value = currentNumber;
});

decimal.addEventListener('click', () => {
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
        display.value = currentNumber;
    }
});
```