function full_Sentence() { // Defines the function
    var part_1 = "I have "; // Defines several variables
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4); // defines a variable concatenating all parts
    document.getElementById("Concatenate").innerHTML = whole_sentence; // Puts the value of the variable into the HTML elementFromPoint with the "whole_sentence" id
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy."; // Defines the variable Sentence
    var Section = Sentence.slice(27,33); // Defines the Section as the objects in the specified 
    document.getElementById("Slice").innerHTML = Section;
}

function all_Cap() {
    var user_input = document.getElementById("New_Input").value;
    var upper_input = user_input.toUpperCase();
    document.getElementById("Upper_Text").innerHTML = upper_input;
}

function search() {
    var text = "Mr. Blue has a blue horse.";
    var position = text.search("Blue");
    document.getElementById("search_position").innerHTML = position;
}

function string_Method() {
    var X = 123;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var Y = 12344.12344565464563;
    document.getElementById("Precision").innerHTML = Y.toPrecision(10);
}