

function addEvent(elem, event, fn){
    if(elem.addEventListener){
      elem.addEventListener(event, fn, false);
    }else{
      elem.attachEvent("on" + event,
      function(){ return(fn.call(elem, window.event)); });
    }}
    var element = document.getElementById('new');
    
    addEvent(element,'focus',function(){
      var that = this;
      setTimeout(function(){ that.selectionStart = that.selectionEnd = 10000; }, 0);
    });

    addEvent(element,'click',function(){
        var that = this;
        setTimeout(function(){ that.selectionStart = that.selectionEnd = 10000; }, 0);
      });


let inputField = document.getElementById("new");
inputField.value = "0";

let key = false;

/* inputField.onkeydown = function() {
    var key = event.keyCode || event.charCode;

    if( key == 8) {

        if (/^[0-9*\/+^!\-.]$/.test(inputField.value[inputField.value.length-1]) === true) {
            store1 = store2;
            store2 = "";
        }

    }
        
}; */


inputField.addEventListener('keyup',function() {
   
    keyCode = event.keyCode;
    console.log(keyCode);
    if(keyCode === 8) {
        
        store1 = store1.slice(0, -1);
        operatorBefore = 0;
        dotBefore = 0;
    }

    else if(keyCode === 13) {

        interpreter('=');     

    }

    //else if(keyCode === 16) {

      //  interpreter("!");

    // }

    else if (keyCode === 16 || keyCode === 27 || keyCode === 3 || keyCode === 9 || keyCode === 12 || keyCode === 17 || keyCode === 18 || keyCode === 19 || keyCode === 20 || keyCode === 21 || keyCode === 25 || keyCode === 27 || keyCode === 28 || keyCode === 29 || keyCode === 32 || keyCode === 33 || keyCode === 34 || keyCode === 35 || keyCode === 36 || keyCode === 37 || keyCode === 38 || keyCode === 39 || keyCode === 40 ||  keyCode === 41 || keyCode === 42 || keyCode === 43 || keyCode === 44 || keyCode === 45 || keyCode === 46 || keyCode === 47 || keyCode === 91 || keyCode === 92 || keyCode === 93 || keyCode === 95 || keyCode === 112 || keyCode === 113 || keyCode === 114 || keyCode === 115 ||  keyCode === 116 ||
        keyCode === 117 || keyCode === 118 || keyCode === 119 || keyCode === 120 || keyCode === 121 || keyCode === 122 || keyCode === 123 || keyCode === 124 || keyCode === 125 || keyCode === 126 || keyCode === 127 || keyCode === 128 || keyCode === 129 || keyCode === 130 || keyCode === 131 || keyCode === 132 || keyCode === 133 || keyCode === 134 || keyCode === 135 ||
        keyCode === 144 || keyCode === 145 || keyCode === 151 || keyCode === 166 || keyCode === 167 || keyCode === 168 || keyCode === 172 || keyCode === 174 || keyCode === 175 || keyCode === 176 ||
        keyCode === 177 || keyCode === 178 || keyCode === 179 || keyCode === 180 || keyCode === 181 || keyCode === 182 || keyCode === 183 || keyCode === 224 || keyCode === 225 ||
        keyCode === 230 || keyCode === 233 || keyCode === 234 || keyCode === 235 || keyCode === 240 || keyCode === 242 || keyCode === 243 || keyCode === 244 || keyCode === 251 || keyCode === 255) {
            
        }

    else if (/^[0-9*\/+^!\-.]$/.test(this.value[this.value.length-1])) {
        
        if((dotBefore === 1 || operatorBefore === 1) && /^[*\/+^!\-.]$/.test(this.value[this.value.length-1])) {
            inputField.value = inputField.value.removeCharAt(this.value.length-1);
            interpreter(this.value[this.value.length-1]);
        }
        else {
            console.log(this.value[this.value.length-1])
            key = true;
            if (inputField.value[0] === "0" && /^[0-9]$/.test(this.value[1])) 
                inputField.value = inputField.value.slice(1);
        
            interpreter(this.value[this.value.length-1])
        }
        }

    else if (/^[0-9*\/+^!\-.]$/.test(this.value[this.value.length-1]) === false)
            inputField.value = inputField.value.slice(0, -1);

    
})


String.prototype.removeCharAt = function (i) {
    var tmp = this.split(''); // convert to an array
    tmp.splice(i - 1 , 1); // remove 1 element from the array (adjusting for non-zero-indexed counts)
    return tmp.join(''); // reconstruct the string
}


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


let store1 = "0";
let operator = "";
let store2;
let reset;
let operatorBefore = 0;
let dotBefore = 0;
let alertCounter = 0;

function interpreter(string) {
    if (inputField.value === "0" && string === ".") {

        inputField.value = "0.";

    }

    else if (inputField.value === "0" && /^[0-9]$/.test(string)) {
        console.log("nonono");
        inputField.value = string; }

        
        
    else if ((dotBefore === 1 || operatorBefore === 1) && 
            (string === "+" || string === "!" || string === "-" || 
            string === "*" || string === "/" || string === "^" || string === ".")) {
           inputField.value = inputField.value.replace(/.$/,string);
         }
  else if (string === "=" && (store1 === "" || store2 === "" || store2 === undefined)) {

  }

  else if(string === '.' && store1.search(/\./) >= 0) {

  }
    
    else if (key === false) {
        inputField.value += string;
    }
key = false;

    if(string === "!") {

        inputField.value = operate("!",parseFloat(store1),parseFloat(store2));
        store1 = inputField.value;
        operator = "";
        // store2 = store1;
        // store1 = "";
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
            
                if(store1.slice(store1.search(/[*\/+\-^]/),store1.search(/[*\/+\-^]/)+1) !== "") {

            let newStore2 = store1.slice(0, store1.search(/[*\/+\-^]/))
            console.log("newStore2 " + newStore2)
            let newStore1 = store1.slice(store1.search(/[*\/+\-^]/)+1);
            console.log("newStore1 " + newStore1);
            let newOperator = store1.slice(store1.search(/[*\/+\-^]/),store1.search(/[*\/+\-^]/)+1);
            console.log("newOperator " + newOperator);
            inputField.value = operate(operator,parseFloat(newStore2),parseFloat(newStore1));
           console.log("What happens here? " + inputField.value);
            if (decimalPlaces(inputField.value) > 7) {
                inputField.value = round(inputField.value, 7) }
            
           
            store1 = inputField.value;
            
            if (string === "=") {}
            else {inputField.value += string;
                reset = 1;}
            } 
        }
         }
        
     if (string !== "=" && store1 !== "") {
        store2 = store1;
        store1 = ""; 
        console.log("Call the police!");
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
//    inputField.value = string;
  //   store1 += string;
  store1 = inputField.value;
    reset = 0;
    console.log("hello2:" + store1);
    operatorBefore = 0;
    }

    else if (string === "." && dotBefore === 1) {
 store1 = store1.replace(/.$/,string);
 operatorBefore = 0;
    }

    else if (string === '.' && store1.search(/\./) >= 0) {}

    else {
        // store1 += string;
        store1 = inputField.value;
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

// if(inputField.value.length > 13 && alertCounter === 0){

//    alert("You've reached the limits of this calculator. Please note that calculations with more digits could be buggy.")
//    alertCounter = 1;
// }

 //   if(inputField.value.length > 16) {
   //     inputField.value = parseFloat(inputField.value).toExponential();
      
  //  }

  inputField.focus();

}


function reset2() {
    store1 = "0";
    store2 = "";
    operatorBefore = 0;
    reset = 0;
    dotBefore = 0;
    inputField.value = "0";
    alertCounter = 0;
    inputField.focus();

}

function backspace() {

    store1 = store1.slice(0, -1);

    if (/^[0-9*\/+^!\-.]$/.test(inputField.value[inputField.value.length-1]) === true) {
        store1 = store2;
        store2 = "";
    }

    inputField.value = inputField.value.slice(0, -1);
    operatorBefore = 0;
    inputField.focus();

}