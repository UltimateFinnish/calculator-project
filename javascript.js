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
    //let num1 = prompt("Type a number: ");
    //let operand = prompt("Type an operand (+) (-) (*) (/): ");
    //let num2 = prompt("Type another number: ");
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
    alert(result);
}

document.addEventListener('keydown', e => console.log(e.key));