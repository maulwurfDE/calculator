let store1 = "0";
let operator = "";
let store2;
let reset;
let operatorBefore = 0;
let dotBefore = 0;
let alertCounter = 0;

const resultsContent = document.getElementById('results-content');
const audio = new Audio('sounds/Rechenmaschine3.m4a');

let inputField = document.getElementById("new");
let key = false;
document.addEventListener('keydown', addingMachineKeyboard);

function addingMachineKeyboard (e) {
    keyCode = e.key;
    console.log(e.key);
    if (keyCode === 'Backspace') {
        inputField.textContent = inputField.textContent.slice(0, -1);
        console.log(inputField.textContent);
        store1 = store1.slice(0, -1);
        operatorBefore = 0;
        dotBefore = 0;
    }
    else if (keyCode === 'Enter') {
        interpreter('=');     
    }

    else if (keyCode === '*' || keyCode === '/' || keyCode === '-' || keyCode === '^' || keyCode === '+' || keyCode === '!' || keyCode === '0' || 
    keyCode === '1' || keyCode === '2' || keyCode === '3' || keyCode === '4' || keyCode === '5' || keyCode === '6' || keyCode === '7' || 
    keyCode === '8' || keyCode === '9') {
        interpreter(keyCode);
    }

    else if (keyCode === ',' || keyCode === '.') {
        interpreter('.');
    }
}


String.prototype.removeCharAt = function (i) {
    var tmp = this.split(''); // convert to an array
    tmp.splice(i - 1 , 1); // remove 1 element from the array (adjusting for non-zero-indexed counts)
    return tmp.join(''); // reconstruct the string
}


function add(a, b) {
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

function power(a,b) {
	let i = 1;
	let c = a;
	while(i<b) {
	 c *= a;
		i++;
	}
if(b===0) c = 1;
	return c;
}

function factorial(b) {
    
    if (b === 0) return 1;
    return b * factorial(b-1);
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

    else if (operator === "^") {
        return power(a,b);
    }

    else if (operator === "!") {
        return factorial(a);
    }
    else { console.log("ERROR")}
}




function interpreter(string) {  

    if(input.checked) {
        interpreterOld(string);
        return;
    }

    if (inputField.textContent === "0" && string === ".") {
        inputField.textContent = "0.";
    }
    else if (inputField.textContent === "0" && /^[0-9]$/.test(string)) {
        inputField.textContent = string; 
    }       
    else if ((dotBefore === 1 || operatorBefore === 1) && 
            (string === "+" || string === "!" || string === "-" || 
            string === "*" || string === "/" || string === "^" || string === ".")) {
            console.log(inputField.textContent + 'hii')
            inputField.textContent = inputField.textContent.replace(/.$/,string);
         }
    else if (string === "=" && (store1 === "" || store2 === "" || store2 === undefined)) {

    }

    else if(string === '.' && store1.replace(store2,'').search(/\./) >= 0) {

    }
    
    else if (key === false) {
        inputField.textContent += string;
    }
    key = false;
    if(string === "!") {
        inputField.textContent = operate("!",parseFloat(store1),parseFloat(store2));
        store1 = inputField.textContent;
        operator = "";
    }
    if(string === "+" || string === "-" || 
    string === "*" || string === "/" || string === "^" || string === "=") {
        if (operatorBefore === 0) {
            
            if(operator !== "" && store1 !== "" && store2 !== "" && store1 !== "." && store2 !== ".") {
                if(store1.match(/\/0+$/)) {
                    reset2();
                    inputField.focus();
                    alert("You can't do that");
                }
                else {
                    if(store1.slice(store1.search(/[*\/+\-^]/),store1.search(/[*\/+\-^]/)+1) !== "") {
                        let newStore2;
                        let newStore1;
                        if(store1.charAt(0) === '-') {
                            let store1WithoutMinus = store1.slice(1);
                            newStore2 = store1.slice(0, store1WithoutMinus.search(/[*\/+\-^]/)+1);
                            newStore1 = store1.slice(store1WithoutMinus.search(/[*\/+\-^]/)+1);
                        } else {
                            newStore2 = store1.slice(0, store1.search(/[*\/+\-^]/)+1);
                            newStore1 = store1.slice(store1.search(/[*\/+\-^]/)+1);
                        }
                        inputField.textContent = operate(operator,parseFloat(newStore2),parseFloat(newStore1));
                       
                        if (decimalPlaces(inputField.textContent) > 3) {
                            inputField.textContent = round(inputField.textContent, 3) }
                        store1 = inputField.textContent;
                        if (string === "=") {}
                        else {inputField.textContent += string;
                            reset = 1;}
                        addingMachine(inputField.textContent);
                    } 
                }
            }
        
            if (string !== "=" && store1 !== "") {
                store2 = store1;
                store1 = ""; 
                dotBefore = 0;
            }
            else if (string === "=") { store2 = "";}
            operator = string;
        }
        if (string === "=") {}
        else operatorBefore = 1;
    }
    else if (reset === 1) {
        store1 = inputField.textContent;
        reset = 0;
        operatorBefore = 0;
    }
    else if (string === "." && dotBefore === 1) {
        store1 = store1.replace(/.$/,string);
        operatorBefore = 0;
    }
    else if (string === '.' && store1.search(/\./) >= 0) {}
    else {
        store1 = inputField.textContent;
        operatorBefore = 0;
    }
    if (operatorBefore === 1) {
        operator = string;
    }
    if (string === ".") {dotBefore = 1;}
    else {dotBefore = 0;}
    inputField.focus();
}

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function decimalPlaces(num) {
    var match = (''+num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    if (!match) { return 0; }
    return Math.max(
         0,
         // Number of digits right of decimal point.
         (match[1] ? match[1].length : 0)
         // Adjust for scientific notation.
         - (match[2] ? +match[2] : 0));
}


function reset2() {
    store1 = "0";
    store2 = "";
    operatorBefore = 0;
    reset = 0;
    dotBefore = 0;
    inputField.textContent = "0";
    alertCounter = 0;
    inputFieldOld.value = '';

}

function backspace() {
    store1 = store1.slice(0, -1);
    inputField.textContent = inputField.textContent.slice(0, -1);
    operatorBefore = 0;
    inputField.focus();
}

function addingMachine(num) {
    let char = num.charAt(num.length-1);
    if(char === '*' || char === '+' || char === '-' || char === '^' || char === '/') {
    num = num.slice(0, num.length-1);
    }
    const children = document.getElementById('results-content').children;
    if(children.length === 17) document.getElementById('results-content').removeChild(document.getElementById('results-content').firstChild);
    const newResultsDiv = document.createElement('div');
    if(num < 0) newResultsDiv.style.color = '#ff3c00fa';
    if(Number(num) % 1 === 0) newResultsDiv.innerHTML = `${num}.00<br>`;
    else if(decimalPlaces(num) === 1) newResultsDiv.innerHTML = `${num}0<br>`;
    else newResultsDiv.innerHTML += `${num}<br>`;
    document.getElementById('results-content').append(newResultsDiv);
    audio.play();
}

let input = document.getElementById('toggleswitch');
let outputtext = document.getElementById('status');

input.addEventListener('change',function(){
    if(this.checked) {
        outputtext.innerHTML = "Style: Calculator with Input Field";
        document.getElementById('new').style.display = 'none';
        document.getElementById('old').style.display = 'inline';
        document.getElementById('results-inner').style.display = 'none';
        document.getElementById('results-inner').textContent = '';
        document.removeEventListener('keydown', addingMachineKeyboard);
        reset2();
        document.getElementById('old').focus();
    } else {
        outputtext.innerHTML = "Style: Electronic Adding Machine";
        document.getElementById('old').style.display = 'none';
        document.getElementById('new').style.display = 'block';
        document.getElementById('results-inner').style.display = 'flex';
        document.addEventListener('keydown', addingMachineKeyboard);
        reset2();
        inputField.focus();
        
    }
});


// Create a switch that switches between calculator and addingmachine. Put the switch maybe below the calculator alltogether (easiest way), center it, 
// default option: adding machine, other option: calculator with old code and display input field.

// maybe remove input field completely, also from calculator version. It's too error-prone. 

// Use comma instead of dot for adding machine? Or just seperate big numbers with comma and keep dot for fractions. Check in adding machine video what is 
// appropriate 
// For the adding machine part, rewrite the script.js so that the functionality of the calculator is switched as well. So that it works like a real adding machine.
// Display the individual numbers added on the adding machine display, not the totals. 