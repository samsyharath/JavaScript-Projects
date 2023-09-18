function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough" : "You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red")
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White")
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard")
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + " colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function myFunction2() {
    document.getElementById("New_and_This").innerHTML = "Emily drives a " + Emily.Vehicle_Color + " " + Emily.Vehicle_Model + ", which is made by " + Emily.Vehicle_Make +"."
}

var champ = "true"
var Starting_point = 9;
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        function Plus_one() {Starting_point +=1;}
        Plus_one();
        return Starting_point;
    }
}