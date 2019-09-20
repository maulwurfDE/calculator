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
let alertCounter = 0;

function interpreter(string) {
    if (document.querySelector('#input').innerHTML === "0" && string === ".") {

        document.querySelector('#input').innerHTML = "0.";

    }

    else if (document.querySelector('#input').innerHTML === "0") {
        document.querySelector('#input').innerHTML = string; }

        
        
    else if ((dotBefore === 1 || operatorBefore === 1) && 
            (string === "+" || string === "!" || string === "-" || 
            string === "*" || string === "/" || string === "^" || string === ".")) {
          document.querySelector('#input').innerHTML = document.querySelector('#input').
          innerHTML.replace(/.$/,string);
         }
  else if (string === "=" && (store1 === "" || store2 === "" || store2 === undefined)) {

  }

  else if(string === '.' && store1.search(/\./) >= 0) {

  }
    
    else {
        document.querySelector('#input').innerHTML += string;
    }


    if(string === "!") {

        document.querySelector('#input').innerHTML = operate("!",parseFloat(store1),parseFloat(store2));
        store1 = document.querySelector('#input').innerHTML;
        operator = "";
        store2 = store1;
        store1 = "";
    }

    if(string === "+" || string === "-" || 
    string === "*" || string === "/" || string === "^" || string === "=") {

  //  console.log("place1: " + operatorBefore);
     if (operatorBefore === 0) {
        if(operator !== "" && store1 !== "" && store2 !== "" && store1 !== "." && store2 !== ".") {
          
            if(operator === "/" && store1 === "0") {
                reset2();
                alert("You can't do that");
            }
            else {
            
            
            document.querySelector('#input').innerHTML = operate(operator,parseFloat(store2),parseFloat(store1));
           
            if (decimalPlaces(document.querySelector('#input').innerHTML) > 7) {
                document.querySelector('#input').innerHTML = round(document.querySelector('#input').innerHTML, 7) }
            
           
            store1 = document.querySelector('#input').innerHTML;
            
            if (string === "=") {}
            else {document.querySelector('#input').innerHTML += string;
                reset = 1;}
            }
         }
        
     if (string !== "=") {
        store2 = store1;
        store1 = ""; 
        }
    else if (string === "=") { store2 = "";}
        operator = string;
         console.log("store1: " + store1);
         console.log("store2: " + store2);
     // }


        }
        if (string === "=") {}
        else operatorBefore = 1;
        console.log("place2: " + operatorBefore);
    }

  
    else if (reset === 1) {
//    document.querySelector('#input').innerHTML = string;
    store1 += string;
    reset = 0;
    console.log("hello2:" + store1);
    operatorBefore = 0;
    }

    else if (string === "." && dotBefore === 1) {
 store1 = store1.replace(/.$/,string);
 operatorBefore = 0;
    }

    else if (string === '.' && store1.search(/\./) >= 0) {}
    
    else {store1 += string;
        console.log("hello: " + store1);
        operatorBefore = 0;
    }
    
if (operatorBefore === 1) {
    operator = string;

    }
if (string === ".") {dotBefore = 1;}
else {dotBefore = 0;}

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



// };

// if(document.querySelector('#input').innerHTML.length > 13 && alertCounter === 0){

//    alert("You've reached the limits of this calculator. Please note that calculations with more digits could be buggy.")
//    alertCounter = 1;
// }

 //   if(document.querySelector('#input').innerHTML.length > 16) {
   //     document.querySelector('#input').innerHTML = parseFloat(document.querySelector('#input').innerHTML).toExponential();
      
  //  }
}


function reset2() {
    store1 = "";
    store2 = "";
    operatorBefore = 0;
    reset = 0;
    dotBefore = 0;
    document.querySelector('#input').innerHTML = "0";
    alertCounter = 0;

}

function backspace() {

    document.querySelector('#input').innerHTML = document.querySelector('#input').innerHTML.slice(0, -1);
    store1 = store1.slice(0, -1);
}

