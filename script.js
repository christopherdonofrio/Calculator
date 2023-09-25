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

const numbers = document.querySelectorAll(".numbers")
let displayNum = "";
let currentDisplay = ""


numbers.forEach((num) => {
    num.addEventListener('click', function() {
        currentDisplay += num.textContent;
        console.log(currentDisplay)
    });
});


function updateDisplay(currentDisplay) {
    const display = document.querySelector(".display")
    display.textContent = currentDisplay
}
