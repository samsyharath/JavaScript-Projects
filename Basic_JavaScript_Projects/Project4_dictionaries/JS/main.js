function Dictionary() { // Defines the function
    var info = { // Defines a variable and dictionary
        Name: "Samson",
        Age: 38,
        City: "Portland",
        Pet: "Daisy"
    };
    delete info.Age; //removes the Age KVP
    document.getElementById("Dictionary").innerHTML = info.Age; //Puts the value of the variable into the HTML elementFromPoint with the "Dictionary" id
}