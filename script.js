let inputFieldOld = document.getElementById("new");
let keyOld = false;


function calculatorEvent (e) {
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
        interpreterOld('=');     
    }

    else if (keyCode === '*' || keyCode === '/' || keyCode === '-' || keyCode === '^' || keyCode === '+' || keyCode === '!' || keyCode === '0' || 
    keyCode === '1' || keyCode === '2' || keyCode === '3' || keyCode === '4' || keyCode === '5' || keyCode === '6' || keyCode === '7' || 
    keyCode === '8' || keyCode === '9') {
        interpreterOld(keyCode);
    }

    else if (keyCode === ',' || keyCode === '.') {
        interpreterOld('.');
    }
    
}


function interpreterOld(string) {
    if (inputFieldOld.textContent === "0" && string === ".") {
        inputFieldOld.textContent = "0.";
    }
    else if (inputFieldOld.textContent === "0" && /^[0-9]$/.test(string)) {
        inputFieldOld.textContent = string; 
    }       
    else if ((dotBefore === 1 || operatorBefore === 1) && 
            (string === "+" || string === "!" || string === "-" || 
            string === "*" || string === "/" || string === "^" || string === ".")) {
           inputFieldOld.textContent = inputFieldOld.textContent.replace(/.$/,string);
         }
    else if (string === "=" && (store1 === "" || store2 === "" || store2 === undefined)) {

    }

    else if(string === '.' && store1.replace(store2,'').search(/\./) >= 0) {

    }
    
    else if (keyOld === false) {
        inputFieldOld.textContent += string;
    }
    keyOld = false;
    if(string === "!") {
        inputFieldOld.textContent = operate("!",parseFloat(store1),parseFloat(store2));
        store1 = inputFieldOld.textContent;
        operator = "";
    }
    if(string === "+" || string === "-" || 
    string === "*" || string === "/" || string === "^" || string === "=") {
        if (operatorBefore === 0) {
            
            if(operator !== "" && store1 !== "" && store2 !== "" && store1 !== "." && store2 !== ".") {
                if(store1.match(/\/0+$/)) {
                    reset2();
                    inputFieldOld.focus();
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
                        
                        inputFieldOld.textContent = operate(operator,parseFloat(newStore2),parseFloat(newStore1));
                       

                        if (decimalPlaces(inputFieldOld.textContent) > 3) {
                            inputFieldOld.textContent = round(inputFieldOld.textContent, 3) }
                        store1 = inputFieldOld.textContent;
                        if (string === "=") {}
                        else {inputFieldOld.textContent += string;
                            reset = 1;}
                    } 
                }
            }
        
            if (string !== "=" && store1 !== "") {
                store2 = store1;
                store1 = ""; 
            }
            else if (string === "=") { store2 = "";}
            operator = string;
        }
        if (string === "=") {}
        else operatorBefore = 1;
    }
    else if (reset === 1) {
        store1 = inputFieldOld.textContent;
        reset = 0;
        operatorBefore = 0;
    }
    else if (string === "." && dotBefore === 1) {
        store1 = store1.replace(/.$/,string);
        operatorBefore = 0;
    }
    else if (string === '.' && store1.search(/\./) >= 0) {}
    else {
        store1 = inputFieldOld.textContent;
        operatorBefore = 0;
    }
    if (operatorBefore === 1) {
        operator = string;
    }
    if (string === ".") {dotBefore = 1;}
    else {dotBefore = 0;}
    inputFieldOld.focus();
}
