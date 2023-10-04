function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function Text_Length() {
    text = document.getElementById("text").value;
    var text_count = text.length;
    document.getElementById("length").innerHTML = "That text has " + text_count +" characters."
}