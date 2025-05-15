function sepa(){
    console.log('--------------------------------------------');
};



//FUNCTION FOR MATHS OPERATION

function sum (num1, num2){
    return num1 + num2;
}

console.log(sum(2, 2));

function subtract (num1, num2){
    return num1 - num2;
}

console.log(subtract(2, 2));

function multiply (num1, num2){
    return num1 * num2;
}

console.log(multiply(2, 2));

function divide (num1, num2){
    return num1 / num2;
}

console.log(divide(2, 2));

sepa();


//VARIABLES FOR OPERATORS AND NUMBERS

let num1;
let num2;
let operator;


// FUNCTION FOR OPERATIONS
function operate(num1, num2, operator){
    switch(operator){
        case '+':
            return sum(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}


//DOM MANIPULATION ELEMENTS
const container = document.querySelector('.calculator-container');
const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('[data-type="number"]');
const operatorsButtons = document.querySelectorAll('[data-type="operator"]');
const equalButton = document.querySelector('[data-type="equal"]');
const clearButton = document.querySelector('[data-type="clear"]');

