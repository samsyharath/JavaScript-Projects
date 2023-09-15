function firstFunction() {
    A = "You clicked the button.";
    document.getElementById("Math").innerHTML = A;
}

function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + Subtraction;
}

function multiply() {
    var multiplied = 5 * 2;
    document.getElementById("Math").innerHTML = "5 X 2 = " + multiplied;
}
function division_Function() {
    var Division = 6 / 2;
    document.getElementById("Math").innerHTML = "6 / 2 = " + Division;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6, you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var aNumber = 25;
    document.getElementById("Math").innerHTML = "The negative of 25 is: " + -aNumber;
}

function increment() {
    var bNumber = 1;
    bNumber ++;
    document.getElementById("Math").innerHTML = "last number + 1: " + bNumber;
}

window.alert(Math.random() * 100);