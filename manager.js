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

    save_state(CB, inc) {
        printText(A.toString(), row+inc, col); 
        this.CB = CB;
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
                case "Insertion" : test1(); break;
                case "Selection" : test2(); t+=200; break;
                case "GoldsPore" : test3(); t+=400; break;
                default : break;
            }
            this.save_state({ idx: ++i, buffer: A }, t);
        }
    }
}

// global memory
var A, i, n, done, dbit;

function test1() {
    let deck = A[i], hand = i-1;
    // swaps elements in hand as long as deck elm < current hand elm 
    while (hand >= 0 && A[hand] > deck) {
        A[hand+1] = A[hand--];
    }
    A[hand+1] = deck;
}

function test2() {
    let min = i;
    // searches for the minimum element along A[0...n-i-1] elements
    for (let j = i+1; j < n; ++j) {
        if (A[j] < A[min]) min = j;
    }
    [A[i], A[min]] = [A[min], A[i]];
}

function test3() {
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
