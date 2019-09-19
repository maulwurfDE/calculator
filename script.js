function add(a, b) {

    console.log("hi, I'm here")
    return a+b;
    


}

function subtract(a, b) {

    return a - b;
    
    }


function multiply(a,b) {

    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator,a,b) {

    if (operator === "+") {
        return add(a,b);
    }

    else if (operator === "-") {
        return subtract(a,b);
    }

    else if (operator === "*") {
       return multiply(a,b);
    }

    else if (operator === "/") {
        return divide(a,b);
    }
    else { console.log("ERROR")}
}