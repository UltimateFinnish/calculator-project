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

function operate(arrayFromDisplay) {

    let num1 = 0;
    let operand = 0;
    let num2 = 0;

    console.log(arrayFromDisplay);
    let size =  Object.keys(arrayFromDisplay).length;
    console.log(size);
    for (i = 0; i < size; i++) {
        let num = arrayFromDisplay[i];
        console.log(num);
    }

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

function calculate(ray) {
    for (i = 0; i < ray.length; i++) {
        if (isNaN(ray[i])) {
            console.log("This is an operand");
            console.log(ray[i-1] - ray[i+1]);
        } else {
            console.log("This is not");
        }
    }
}

// document.addEventListener('keydown', e => console.log(e.key));


numberButtons = document.querySelectorAll('[data-number'); //Assigns Number buttons
operandButtons = document.querySelectorAll('[data-operation]'); //Assigns operator buttons
equalsButton = document.querySelector('[data-equals]'); //Assigns equals button

let textDisplay = document.querySelector('[data-current-operand]');

document.addEventListener('keydown', e => { //Takes keyboard input
    textDisplay.textContent += e.key;
});

numberButtons.forEach(button => {      //Takes number button input
    button.addEventListener('click', () => {
        textDisplay.textContent += button.innerText;
    })    
});



operandButtons.forEach(button => {      //Takes operation button input
    button.addEventListener('click', () => {
        textDisplay.textContent +=  ' ' + button.innerText + ' ';
    })
})

equalsButton.addEventListener('click', () => {
    let numArray = textDisplay.textContent.split(" ");
    let numArray2 = {};
    for (i = 0; i < numArray.length; i++) {
        numArray2[i] = numArray[i];
    }
    textDisplay.textContent += ' ' + equalsButton.innerText + ' ';
    console.log(numArray);
    console.log(numArray2);
    // operate(numArray2);
    calculate(numArray);
})




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



