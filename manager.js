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

class Manager {
    constructor(name) {
        this.name = name;
        this.CB = { // Control Block
            idx: 0,
            pass: 0,
            buffer: [],
            done: false,
        }
    }

    save_state(CB) {
        this.CB = CB;
		for (const elm of this.CB.buffer) {
			token += elm.toString();
		}
        token += " ";
    }

    restore_state() {
        A = this.CB.buffer;
        i = this.CB.idx;
        n = this.CB.buffer.length;
        dbit = this.CB.done;
        done = solved(A);
    }

    decode() {
        this.restore_state();
        if (!done) {
            let t = 0;
            switch(this.name) {
                case "Insertion" : insertionSort(); break;
                case "Selection" : selectionSort(); break;
                case "GoldsPore" : goldPoreSort(); break;
                default : break;
            }
            this.save_state({ idx: ++i, buffer: A });
        }
    }
}

// global memory
var A, i, n, done, dbit, changes, token = "";

function insertionSort() {
    let deck = A[i], hand = i-1;
    // swaps elements in hand as long as deck elm < current hand elm 
    while (hand >= 0 && A[hand] > deck) {
        A[hand+1] = A[hand--];
    }
    A[hand+1] = deck;
}

function selectionSort() {
    let min = i;
    // searches for the minimum element along A[0...n-i-1] elements
    for (let j = i+1; j < n; ++j) {
        if (A[j] < A[min]) min = j;
    }
    [A[i], A[min]] = [A[min], A[i]];
}

function goldPoreSort() {
    dbit = true;
    for (let k = 0; k < n; k+=2) { // even half-passes
        if (A[k+1] < A[k]) {
            dbit = false;
            [A[k+1], A[k]] = [A[k], A[k+1]]; // swaps the current and next element
        }
    }
    for (let k = 1; k < n; k+=2) { // odd half-passes
        if (A[k+1] < A[k]) {
            dbit = false;
            [A[k+1], A[k]] = [A[k], A[k+1]]; // swaps the current and next element
        }
    }
}