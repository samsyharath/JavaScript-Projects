var A = 10;

function addition() {
    var B = 12;
    var C = B + A;
    document.getElementById("number").innerHTML = C;
}

function wrong_addition() {
    var D = 11;
    var E = D + B;
    document.getElementById("number").innerHTML = E;
}

function get_Date() {
    if (new Date().getHours() < 12) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Age_fave() {
    Age = document.getElementById("Age").value;
    Fav_number = document.getElementById("Fav_number").value;
    var Compare = ""
    console.log(Age);
    console.log(Fav_number);

    if (Age > Fav_number) {
        Compare = "Your age, " + Age + ", is greater than your favorite number, " + Fav_number + ".";
    }
    else if (Age == Fav_number) {
        Compare = "Your age, " + Age + ", is the same as your favorite number, " + Fav_number + ".";
    }
    else {
        Compare = "Your age, " + Age + ", is less than your favorite number, " + Fav_number + ".";
    }
    document.getElementById("Age_number").innerHTML = Compare;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is Afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}