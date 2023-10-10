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

var Instruments = ["Guitar", "Drums", "Piano", "Violin"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

function constant_function() {
    const Animal = {type:"dog", owner:"John", color:"black"};
    Animal.color = "white";
    Animal.age = 10;
    document.getElementById("Constant").innerHTML = "The color of the " + Animal.type + " is " + Animal.color + ".";
}

function let_function() {
    var B = 12;
    document.write(B);
    {
        let B = 9;
        document.write("<br>" + B);
    }
    document.write("<br>" + B)
}