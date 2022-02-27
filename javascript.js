add(3, 4, 87);
subtract(-5,-6);
multiply(3, 4, 87);
divide(8, 4, 2);

function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
function subtract() {
    let difference = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        difference -= arguments[i];
    }
    return difference;
}


function multiply() {
    let product = 1;
    for (let i = 0; i < arguments.length; i++) {
        product *= arguments[i];
    }
    return product;
}

function divide() {
    let quotient = arguments[0];
    for (let i = 1; i < arguments.length; i++){
        quotient /= arguments[i];
    }
    return quotient;
}
// operate();

function operate() {
    let num1 = 0;
    let operand = 0;
    let num2 = 0;
    let result;
    if ( operand == "+") {
        result = add(num1, num2);
    } else if (operand == "-") {
        result = subtract(num1, num2);
    } else if (operand == "*") {
        result = multiply(num1,num2);
    } else if (operand == "/") {
        result = divide(num1,num2);
    }
    //alert(result);
}

// document.addEventListener('keydown', e => console.log(e.key));


numberButtons = document.querySelectorAll('[data-number'); //Assigns Number buttons
operandButtons = document.querySelectorAll('[data-operation]'); //Assigns operator buttons

let text = document.querySelector('[data-current-operand]'); //Takes keyboard input
document.addEventListener('keydown', e => {
    text.textContent += e.key;
});

numberButtons.forEach(button => {      //Takes number button input
    button.addEventListener('click', () => {
        text.textContent += button.innerText;
    })    
});

operandButtons.forEach(button => {      //Takes operation button input
    button.addEventListener('click', () => {
        text.textContent += button.innerText;
    })
})


console.log(text.textContent);



/*let numberButt = document.querySelectorAll('[data-number]');
console.log(numberButt);

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');


class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
    appendNumber(number) {
        this.currentOperand = number;
    }
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;45
    }
}

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay;
    })
})*/



