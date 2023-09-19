function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
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