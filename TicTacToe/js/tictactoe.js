//This variable keeps track of whose turn it is.
let activePlayer = 'X';
//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

//This function is for placing an x or o in a square.
function placeXOrO(squareNumber) {
    //This condition ensures a square hasn't been selected already.
    //The .some() method is used to check each element of the selectSquare array
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //This variable retrieves the HTML element id that was clicked.
        let select = document.getElementById(squareNumber);
        //This condition checks who's turn it is.
        if (activePlayer === 'X') {
            //If activePlayer is equal to 'X', the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/x.png")';
            //Active player may only be 'X' or 'O' so, if not 'X' it must be 'O'
        } else {
            //If activePlayer is equal to 'O', the o.png is placed in HTML
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions.
        checkWinConditions();
        //This condition is for changing the active player.
        if (activePlayer === 'X') {
            //If active player is 'X' change it to 'O'.
            activePlayer = 'O';
            //if active player is anthing other than 'X'
        } else {
            //Change the activePlayer to 'X'
            activePlayer = 'X';
        }
        //This function plays placement sound.
        audio('./media/place.mp3');
        //This condition checks to see if it is the computers turn.
        if (activePlayer === 'O') {
            //This function diables clicking for the computers turn.
            disableClick();
            //This function waits 1 second before the computer places an image and enables click.
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //Returning true is needed for our computersTurn() function to work.
        return true;
    }
    //This function results in a random square being selected by computer.
    function computersTurn() {
        //This boolean is needed for our while loop.
        let success = false;
        //This variable stores a random number 0-8.
        let pickASquare;
        //This condition allows our while loop to keep trying if a square is selected already.
        while (!success) {
            //A random number between 0 and 8 is selected.
            pickASquare = String(Math.floor(Math.random() * 9));
            //If the random number evaluated returns true, the square hasn't been selected yet.
            if (placeXOrO(pickASquare)) {
                //This line calls the function.
                placeXOrO(pickASquare);
                //This changes our boolean and ends the loop.
                success = true;
            };
        }
    }
}

//This function parses the selectedSquares array to search for win conditions.
//drawLine() function is called to draw a line on the screen if the condition is met.
function checkWinConditions() {
    //X O, 1, 2 condition.
    if (arrayIncludes('OX', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    // X 3, 4, 5 condition.
    else if (arrayIncludes( '3X', '4X', '5X')) {drawWinLine(50, 304, 558, 304) }
    //X 6, 7, 8 condition.
    else if (arrayIncludes( '6X', '7X', '8X')) {drawWinLine(50, 508, 558, 508) }
    //
    else if (arrayIncludes( '0X', '4X', '7X')) {drawWinLine(50, 304, 558, 304) }
    //
    else if (arrayIncludes( '1X', '4X', '7X')) {drawWinLine(304, 50, 304, 558) }
    //
    else if (arrayIncludes( '2X', '5X', '8X')) {drawWinLine(508, 50, 508, 558) }
    //
    else if (arrayIncludes( '3X', '4X', '5X')) {drawWinLine(50, 304, 558, 304) }
    //
    else if (arrayIncludes( '0X', '4X', '8X')) {drawWinLine(100, 100, 520, 520) }
    //
    else if (arrayIncludes( '0O', '1O', '2O')) {drawWinLine(50, 100, 558, 100) }
    //
    else if (arrayIncludes( '3O', '4O', '5O')) {drawWinLine(50, 304, 558, 304) }
    //
    else if (arrayIncludes( '6O', '7O', '8O')) {drawWinLine(50, 508, 558, 508) }
    //
    else if (arrayIncludes( '0O', '3O', '6O')) {drawWinLine(100, 50, 100, 558) }
    //
    else if (arrayIncludes( '1O', '4O', '7O')) {drawWinLine(304, 50, 304, 558) }
    //
    else if (arrayIncludes( '2O', '5O', '8O')) {drawWinLine(508, 50, 508, 558) }
    //
    else if (arrayIncludes( '6O', '4O', '2O')) {drawWinLine(100, 508, 510, 90) }
    //
    else if (arrayIncludes( '0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520) }
    //This condition checks for a tie. If none of the above conditions are met and
    //9 squares are selected the code executes.
    else if (selectedSquares.length >= 9) {
        //This function plays the tie game sound.
        audio('./media/tie.mp3');
        //This function sets a .3 second timer before the resetGame is called.
        setTimeout(function () { resetGame(); }, 500);
    }
    //This function checks if an array includes 3 strings. It is used to check for
    //each win condition.
    function arrayIncludes(squareA, squareB, squareC) {
        //These variables will be used to check for 3 in a row.
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //If the 3 variables we pass are all included in our array then
        //true is returned and our else if condition executes the drawLine() function.
        if (a === true && b === true && c === true) {return true; }
    }

    //This function makes our body element temporarily unclickable.
    function disableClick() {
        //This makes our body unclickable.
        ReportBody.style.pointerEvents = 'none';
        //This makes our body clickable again after 1 second.
        setTimeout(function () { ReportBody.style.pointerEvents = 'auto'; }, 1000);
    }

    //This function takes a string paremeter of the path you set earlier for 
    //placement sound('./media/place.mp3')
    function audio(audioURL) {
        //We create a new audio object and we pass the path as a parameter.
        let audio = new Audio(audioURL);
        //Play method plays our audio sound.
        audio.play();
    }
}