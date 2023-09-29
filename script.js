document.addEventListener('DOMContentLoaded', function() {
/*
function add(x, y) {
    return x+y;
}
function subtract(x, y) {
    return x-y;
}
function multiply(x, y) {
    return x*y;
}
function divide(x, y) {
    return x/y;
}
*/
function operate(a, b, operator) {

    let x = parseInt(a);
    let y = parseInt(b);
    if (operator === "+"){
        return x + y;
    }
    else if (operator === "-") {
        return x - y;
    }
    else if (operator === "*") {
        return x*y;
    }
    else if (operator === "/") {
        return x/y;
    }
}


var number = "";

const displayText = document.querySelector('.displayText');
function updateDisplay(str) {
    if (str === "Clear") {
        displayText.textContent = "";
    }
    else {
        displayText.textContent = str;
    }
}

var numCurrent = "";
var numLast = "";
var operator = "";

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) => {
    button.addEventListener('click', function() {


            if (!isNaN(parseFloat(button.textContent))) {
                numCurrent += button.textContent;
                updateDisplay(numCurrent)
                return

            }
            else if (button.textContent === "Clear") {
                updateDisplay('Clear')
                numCurrent = "";
                numLast = ""
                operator = "";
                return

            }
            else if (isNaN(button.textContent) && button.textContent !== "=") {
                numLast = numCurrent;
                numCurrent = "";
                operator = button.textContent
                updateDisplay(operator)

                return

            }
            else if (button.textContent === "=") {
                numCurrent = operate(numLast, numCurrent, operator)
                updateDisplay(numCurrent)
                return

            }
        });
        
    });
});










