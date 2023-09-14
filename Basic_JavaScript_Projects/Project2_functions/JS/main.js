var C = 1;

function firstFunction() {
    var A = "This is the first variable.";
    var B = "This is the second variable";
    document.getElementById("Function_Text").innerHTML = A;
}

function myFunction() {
    var sentence= "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}
function myAddFunction() {
    C += 1;
    document.getElementById("ConcatC").innerHTML = C;
}