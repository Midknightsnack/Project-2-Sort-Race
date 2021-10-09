/*
    Class: CPSC 335-03
    Assignment: Project 2 - Sort Race

    Authors:
        Valerie Martinez (valeriemartnz@csu.fulleron.edu)
        Anthony Sanchez (sanchezanthony244@csu.fullerton.edu)
        Bradley Diep (bdippin12@csu.fullerton.edu)
        Jason Duong (reddkingdom@csu.fullerton.edu)

    Description:
        Creates Canvas/Layout and Managers (Row and Race) that will supervise
        Sorting Algorithm
 */

/***********************************/

var g_input_1;
var g_button_1;
var input;

class Board {
    constructor(cell, width, height) {
        this.cell = cell;
        this.width = width;
        this.height = height;
    }

    raceManager() {
        input = g_input_1.value(); // get user submission

        if (input.length > 16) {
            input = input.slice(0, 16);
        }
/*
        if (input.length < 16) {
            for (let i = input.length; i <= 16; ++i) { input += '0'; }
        }
*/

        /*****TESTING ONLY*****/

        let A = [], B = [], C = [], D = [], E = [];
	    for (let i = 0; i < input.length; ++i) { A.push(input[i]); B.push(input[i]); C.push(input[i]); D.push(input[i]); E.push(input[i]); }
        board.rowManager(A, B, C, D, E);

        /*****TESTING ONLY*****/
    }

    rowManager(A, B, C, D, E) {
        var row = 0;

        /*****TESTING ONLY*****/

        document.write("Original String: " + input + "<br>");
        document.write("<h2>---Selection Sort---</h2> <br>"); sort.selectionSort(A);
        document.write("<h2>---Insertion Sort---</h2> <br>"); sort.insertionSort(B);
        document.write("<h2>---Gold's Pore Sort---</h2> <br>"); sort.goldPoreSort(C);
        document.write("<h2>---Merge Sort---</h2> <br>"); sort.mergeSort(D);
        document.write("<h2>---Quick Sort---</h2> <br>"); sort.quickSort(E);

        /*****TESTING ONLY*****/
    }
}

const board = new Board(10, 80, 50);

function setup() {
    createCanvas((board.width * board.cell) + 4, board.height * board.cell);
    stroke('white');

    // Setup input-box for input and a callback fcn when button is pressed.
    g_input_1 = createInput(); // Create an input box, editable.
    g_input_1.position(20, 30); // Put box on page.
    g_button_1 = createButton("&#128581"); // Create button to help get input data.
    g_button_1.position(160, 30); // Put button on page.
    g_button_1.mousePressed(board.raceManager); // Hook button press to callback fcn.
}

function draw() {
    if (frameCount % 24 === 0) {
    }
}
