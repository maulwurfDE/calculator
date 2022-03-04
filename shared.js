function reset2() {
    store1 = "0";
    store2 = "";
    operatorBefore = 0;
    reset = 0;
    dotBefore = 0;
    inputField.textContent = "0";
    alertCounter = 0;

}

function backspace() {
    store1 = store1.slice(0, -1);
    inputField.textContent = inputField.textContent.slice(0, -1);
    operatorBefore = 0;
    dotBefore = 0;
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


String.prototype.removeCharAt = function (i) {
    var tmp = this.split(''); // convert to an array
    tmp.splice(i - 1 , 1); // remove 1 element from the array (adjusting for non-zero-indexed counts)
    return tmp.join(''); // reconstruct the string
}
