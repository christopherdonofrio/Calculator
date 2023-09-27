document.addEventListener('DOMContentLoaded', function() {

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

function operate(x, y, operator) {
    if (operator === "+"){
        return add(x, y)
    }
    else if (operator === "-") {
        return subtract(x, y)
    }
    else if (operator === "*") {
        return multiply(x, y)
    }
    else if (operator === "/") {
        return divide(x, y)
    }
}


const displayText = document.querySelector('.displayText');
function updateDisplay(str) {
    if (str === "Clear") {
        displayText.textContent = "";
    }
    else {
        displayText.textContent = str;

    }
}


const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) => {
    button.addEventListener('click', function() {

        if (parseInt(button.textContent) === NaN) {
            updateDisplay(button.textContent);
        }
        else {
            let fullNumber = "";
            while (parseInt(button.textContent) !== NaN) {
            fullNumber += button.textContent
            }
            updateDisplay(fullNumber);
        }   
        
    });
});










});