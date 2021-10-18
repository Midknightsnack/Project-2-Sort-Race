/*
    Class: CPSC 335-03
    Assignment: Project 2 - Sort Race

    Authors:
        Valerie Martinez (valeriemartnz@csu.fulleron.edu)
        Anthony Sanchez (sanchezanthony244@csu.fullerton.edu)
        Bradley Diep (bdippin12@csu.fullerton.edu)
        Jason Duong (reddkingdom@csu.fullerton.edu)

    Description:
        contains functions that control how the entire program operates
 */

var message, target, input;

var alg_1 = new Manager("Insertion");
var alg_2 = new Manager("Selection");
var alg_3 = new Manager("GoldsPore");
var alg_4 = new Manager("MergeSort");

class Board {
    constructor(width, height, cell) {
        this.width = width;
        this.height = height;
        this.cell = cell;
        this.row = 0;
        this.col = 20;
    }

    make() {
        input = message.value(); // get user submission

        if (input.length > 16) { // truncates string if > 16
            input = input.slice(0, 16);
        }
        if (input.length < 16) { // string padding if < 16
            for (let i = input.length; i < 16; ++i) input += '0';
        }

        alg_1.CB.buffer = [...input];
        alg_2.CB.buffer = [...input];
        alg_3.CB.buffer = [...input];
        alg_4.CB.buffer = [...input];
    }

    start() {
        /* 1) at least one alg is not sorted
         * 2) user has inputed a string of hex values
         * 3) the number of frames = 60 (every second) */
        return (!alg_1.CB.done || !alg_2.CB.done || !alg_3.CB.done || !alg_4.CB.done) && input !== undefined && frameCount % 60 === 0;
    }

    run() {
        this.row = 25;
        this.col += 20;
        token = "";

        alg_1.decode();
        alg_2.decode();
        alg_3.decode();
        alg_4.decode();
    
        textSize(15); // text size = 15px
        fill(255); // text color = white
        for (let i = 0; i < token.length; i++, this.row += 20) text(token[i], this.row, this.col); // prints out each character in token string
    }
}

const board = new Board(160, 50, 10);

function setup() {
    createCanvas((board.width * board.cell) + 4, board.height * board.cell);
    draw_grid(20, 20, 'green', 'yellow');

    message = createInput(); // Create an input box, editable.
    message.position(20, 30); // Put box on page.
    target = createButton("Submit &#128581"); // Create button to help get input data.
    target.position(160, 30); // Put button on page.
    target.mousePressed(board.make); // Hook button press to callback fcn.
}

function draw() {
    if (board.start()) board.run(); // only run if started
}
