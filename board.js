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

/***********************************/

function printText(str) {
    noStroke();
    textFont('Helvetica', 12);
    fill(255);
    text(str, row, col); // note row and col are global
}

function raceManager() {
    input = g_input_1.value(); // get user submission

    if (input.length > 16) { // truncates string if > 16
        input = input.slice(0, 16);
    }
    if (input.length < 16) { // extends string if < 16
        for (let i = input.length; i <= 16; ++i) { input += '0'; }
    }

    /*****TESTING ONLY*****/

    let A = [...input], B = [...input], C = [...input], D = [...input], E = [...input];
    rowManager(A, B, C, D, E);

    /*****TESTING ONLY*****/
}

function rowManager(A, B, C, D, E) {
    /*****TESTING ONLY*****/

    document.write("Original String: " + input + "<br>");
    document.write("<h2>---Selection Sort---</h2> <br>"); sort.selectionSort(A);
    document.write("<h2>---Insertion Sort---</h2> <br>"); sort.insertionSort(B);
    document.write("<h2>---Gold's Pore Sort---</h2> <br>"); sort.goldPoreSort(C);
    document.write("<h2>---Merge Sort---</h2> <br>"); sort.mergeSort(D);
    document.write("<h2>---Quick Sort---</h2>" + "<br>"); document.write("RESULT: " + sort.quickSort(E));

    /*****TESTING ONLY*****/
}

var width = 100, height = 50, size = 10;

var g_input_1;
var g_button_1;
var input;

var row = 10, col = 10;

function setup() {
    createCanvas((width * size) + 4, height * size);

    printText("Insertion Sort | Selection Sort | Gold's Pore Sort | Merge Sort | Quick Sort")

    // Setup input-box for input and a callback fcn when button is pressed.
    g_input_1 = createInput(); // Create an input box, editable.
    g_input_1.position(20, 30); // Put box on page.
    g_button_1 = createButton("&#128581"); // Create button to help get input data.
    g_button_1.position(160, 30); // Put button on page.
    g_button_1.mousePressed(raceManager); // Hook button press to callback fcn.
}

function draw() {
    // updates every second
    if (frameCount % 60 === 0) {
        col += 10;
        printText("im struggling");
    }
}
