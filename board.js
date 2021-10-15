/*
    Class: CPSC 335-03
    Assignment: Project 2 - Sort Race

    Authors:
        Valerie Martinez (valeriemartnz@csu.fulleron.edu)
        Anthony Sanchez (sanchezanthony244@csu.fullerton.edu)
        Bradley Diep (bdippin12@csu.fullerton.edu)
        Jason Duong (reddkingdom@csu.fullerton.edu)

    Description:
 */

function printText() {
    noStroke();
    textFont('Helvetica', 12);
    fill(255);

    for (let i = 0; i < token.length; i++, row += 10) text(token[i], row, col);
}

function raceManager() {
    input = g_input_1.value(); // get user submission

    if (input.length > 16) { // truncates string if > 16
        input = input.slice(0, 16);
    }
    if (input.length < 16) { // extends string if < 16
        for (let i = input.length; i < 16; ++i) input += '0';
    }

    alg_1.CB.buffer = [...input];
    alg_2.CB.buffer = [...input];
    alg_3.CB.buffer = [...input];
}

var _width = 100, _height = 50, _cell = 10;
var row = 0, col = 10;

var g_input_1;
var g_button_1;
var input = "";

var alg_1 = new Manager("Insertion");
var alg_2 = new Manager("Selection");
var alg_3 = new Manager("GoldsPore");

function setup() {
    let w = _width*_cell+4;
    let h = _height*_cell;
    createCanvas(w, h);
	draw_grid(20, 20, 'white', 'yellow');

    g_input_1 = createInput(); // Create an input box, editable.
    g_input_1.position(20, 30); // Put box on page.
    g_button_1 = createButton("Submit &#128581"); // Create button to help get input data.
    g_button_1.position(160, 30); // Put button on page.
    g_button_1.mousePressed(raceManager); // Hook button press to callback fcn.
}

function start() {
    /* 1) at least one alg is not sorted
     * 2) user has inputed a string of hex values
     * 3) the number of frames = 60 (every second) */
    return (!alg_1.CB.done || !alg_2.CB.done || !alg_3.CB.done) && input !== "" && frameCount % 60 === 0;
}

function solved(A) {
    // brute-force alg for checking if array is sorted
    for (let i = 0; i < A.length-1; i++) {
        if (A[i] > A[i+1]) {
            return false;
        }
    }
    return true;
}

function draw() {
    if (start()) {
        row = 10;
        col += 10;
        token = "";
        alg_1.decode();
        alg_2.decode();
        alg_3.decode();
        printText();
    }
}
