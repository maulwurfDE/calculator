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
	
	let c = 1;
    let i = 1;
	while(i<=b) {
      c *= i;
		i++;
	}

	if(b===0) c = 1;
	return c;

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

// document.getElementById("one").onclick = interpreter;

// document.getElementById("two").onclick = interpreter;
let store1 = "";
let operator = "";
let store2;
let reset;
let operatorBefore = 0;
let dotBefore = 0;

function interpreter(string) {
    console.log(operatorBefore);
    if (document.querySelector('#input').innerHTML === "0" && string === ".") {

        document.querySelector('#input').innerHTML = "0.";

    }

    else if (document.querySelector('#input').innerHTML === "0") {
        document.querySelector('#input').innerHTML = string; }

        
    else if ((dotBefore === 1 || operatorBefore === 1) && (string === "+" || string === "!" || string === "-" || 
        string === "*" || string === "/" || string === "^" || string === ".")) {
          document.querySelector('#input').innerHTML = document.querySelector('#input').innerHTML.replace(/.$/,string);
         }
  
    
    else {
        document.querySelector('#input').innerHTML += string;
    }


    if(string === "+" || string === "!" || string === "-" || 
    string === "*" || string === "/" || string === "^") {

    
     if (operatorBefore === 0) {
        if(operator !== "" && store1 !== "" && store2 !== "" && store1 !== "." && store2 !== ".") {
            
            document.querySelector('#input').innerHTML = operate(operator,parseFloat(store2),parseFloat(store1));
            store1 = document.querySelector('#input').innerHTML;
            reset = 1;
            document.querySelector('#input').innerHTML += string;
         }
        
     // if (operator === "") {
        store2 = store1;
        store1 = ""; 
     
        operator = string;
        
     // }


        }
        operatorBefore = 1;
    }

  
    else if (reset === 1) {
//    document.querySelector('#input').innerHTML = string;
    store1 += string;
    reset = 0;
    console.log(store1);
    operatorBefore = 0;
    }

    else if (string === "." && dotBefore === 1) {
 store1 = store1.replace(/.$/,string);
 operatorBefore = 0;
    }

    else {store1 += string;
        console.log(store1);
        operatorBefore = 0;
    }
    
if (operatorBefore === 1) {
    operator = string;

    }
if (string === ".") {dotBefore = 1;}
else {dotBefore = 0;}

}


function reset2() {
    store1 = "";
    store2 = "";
    operatorBefore = 0;
    reset = 0;
    dotBefore = 0;
    document.querySelector('#input').innerHTML = "0";

}

