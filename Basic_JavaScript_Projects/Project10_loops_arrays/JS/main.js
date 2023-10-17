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
    var text_count = text.length; // Uses 
    document.getElementById("length").innerHTML = "That text has " + text_count +" characters."
}

<<<<<<< Updated upstream
var Instruments = ["Guitar", "Drums", "Piano", "Violin"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
=======
function Car_Function() {
    let car = { // Defines an object using a let statement
        make: "Ford",
        model: "Mustang",
        year: "1999",
        color: "red",
        description: function() {
            return "This car is a " + this.year + " " + this.color + " " + this.make + " " + this.model;
        }
    };
    document.getElementById("Car_Object").innerHTML = car.description();
}

function Continue_Function() {
    for (let i = 0; i < 10; i++) {
        if (i === 3) {continue;} // Skips rest of loop to begin again, not printing for 3
        if (i === 6) {break;} // Ends the loop not printing after 6
        text += "The number is " + i + "<br>";
        document.getElementById("Continue_Statement").innerHTML = text;
    }
    
>>>>>>> Stashed changes
}

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
<<<<<<< Updated upstream
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
=======
    Cat_Picture[1] = "eating";
    Cat_Picture[2] = "drinking";
    Cat_Picture[3] = "playing";
    Cat_Picture[4] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture the cat is " + Cat_Picture[2] + ".";

}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
>>>>>>> Stashed changes
}