/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    const num1 = Number(document.getElementById('add1').value);
    const num2 = Number(document.getElementById('add2').value);
    const result = add(num1, num2);
    document.getElementById('sum').value = result;
}
document.getElementById('addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
};

const subtractNumbers = function() {
    const num1 = Number(document.getElementById('subtract1').value);
    const num2 = Number(document.getElementById('subtract2').value);
    const result = subtract(num1, num2);
    document.getElementById('difference').value = result;
};
document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    const num1 = Number(document.getElementById('factor1').value);
    const num2 = Number(document.getElementById('factor2').value);
    const result = multiply(num1, num2);
    document.getElementById('product').value = result;
};
document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    return number1 / number2;
}

function divideNumbers() {
    const num1 = Number(document.getElementById('dividend').value);
    const num2 = Number(document.getElementById('divisor').value);
    const result = divide(num1, num2);
    document.getElementById('quotient').value = result;
}
document.getElementById('divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
document.getElementById('getTotalDue').addEventListener('click', () => {
    const subtotal = Number(document.getElementById('subtotal').value);
    const isMember = document.getElementById('membership').checked;
    const totalDue = isMember ? subtotal * 0.8 : subtotal;
    document.getElementById('total').textContent = totalDue.toFixed(2);
});


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */

const numbers = Array.from({length: 13}, (_, i) => i + 1);

document.getElementById('array').textContent = numbers.join(', ');

document.getElementById('odds').textContent = numbers.filter(n => n % 2 === 1).join(', ');

document.getElementById('evens').textContent = numbers.filter(n => n % 2 === 0).join(', ');

document.getElementById('sumOfArray').textContent = numbers.reduce((acc, cur) => acc + cur, 0);

document.getElementById('multiplied').textContent = numbers.map(n => n * 2).join(', ');

document.getElementById('sumOfMultiplied').textContent = numbers.map(n => n * 2).reduce((acc, cur) => acc + cur, 0);
