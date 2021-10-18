/*
    Class: CPSC 335-03
    Assignment: Project 2 - Sort Race

    Authors:
        Valerie Martinez (valeriemartnz@csu.fulleron.edu)
        Anthony Sanchez (sanchezanthony244@csu.fullerton.edu)
        Bradley Diep (bdippin12@csu.fullerton.edu)
        Jason Duong (reddkingdom@csu.fullerton.edu)

    Description:
        manages each sorting algorithm by saving and reloding their states
 */

class Manager {
    constructor(name) {
        this.name = name;
        this.CB = { // Control Block
            idx: 0,
            size: 1,
            buffer: [],
            done: false,
            color: [],
        }
    }

    save_state(CB) {
        this.CB = CB;
    }

    reload_state() {
        A = this.CB.buffer;
        i = this.CB.idx;
        n = this.CB.buffer.length;
        s = this.CB.size;
        sorted = this.CB.done;
        c = this.CB.color;
    }

    decode() {
        this.reload_state(); // restores memory from previous pass/iteration
        switch(this.name) {
            case "Insertion" : insertionSort(); sorted = (i==n); break;
            case "Selection" : selectionSort(); sorted = (i==n); break;
            case "GoldsPore" : goldPoreSort();  sorted = dbit;   break;
            case "MergeSort" : mergeSort();     sorted = s>=n;    break;
            default : break;
        }
        this.save_state({ idx: ++i, size: 2*s, buffer: A, done: sorted, color: c });
        if (!sorted) token += this.CB.buffer.join('') + " ";
    }
}

// global memory
var A, ax, bx, i, n, s, sorted, dbit, token = "";
var c;

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
    // swaps element at index i and min
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

function mergeSort() {
    ax = Divide(A, s), bx = [];
    // get the first two partitioned sub-arrays
    while (ax.length > 1) bx.push(Merge(ax.shift(), ax.shift()));
    // @flat() [ converted KD-array to 1D-array ]
    A = [...bx.flat(), ...ax.flat()];
}

function Divide(B, b_size) {
    // refer to README.txt for original source code
    const temp = [];
    for (let b = 0; b < B.length; b+=b_size) temp.push(B.slice(b, b+b_size));
    return temp;
}

function Merge(B, C) {
    let D = [], x = 0, y = 0, p = B.length, q = C.length;
    while (x < p && y < q) D.push((B[x] <= C[y]) ? B[x++] : C[y++]);
    // either array B or C will be empty
    return [...D, ...B.slice(x, p), ...C.slice(y, q)];
}
