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
    }

    restore_state() {
        return this.CB;
    }

    decode() {
        switch(this.name) {
            case "Insertion" : test1(this.restore_state()); break;
            case "Selection" : test2(this.restore_state()); break;
            case "GoldsPore" : test3(this.restore_state()); break;
            default : break;
        }
    }

	execute() {
	}
}

function test1(arg) {
    if (!arg.done) {
        let i = arg.idx, n = arg.buffer.length, A = arg.buffer;

		/*****************from 'sort.js'************/	

        let deck = A[i], hand = i-1;
        // swaps elements in hand as long as deck element < current hand element
        while (hand >= 0 && A[hand] > deck) {
			A[hand+1] = A[hand--];
		}
        A[hand+1] = deck;

		/*****************from 'sort.js'************/	

        printText(A.toString(), row, col); 

        alg_1.save_state({ idx: ++i, pass: i, buffer: A, done: solved(A) });
        if (solved(A)) printText("Pass: " + arg.pass, row, col+10);
    }
}

function test2(arg) {
    if (!arg.done) {
        let i = arg.idx, n = arg.buffer.length, A = arg.buffer;

		/*****************from 'sort.js'************/	

        let min = i;
        // searches for the minimum element along A[0...n-i-1] elements
        for (let j = i+1; j < A.length; ++j) {
            if (A[j] < A[min]) min = j;
        }
        [A[i], A[min]] = [A[min], A[i]];

		/*****************from 'sort.js'************/	

        printText(A.toString(), row+200, col); 
        alg_2.save_state({ idx: ++i, pass: i, buffer: A, done: solved(A) });
        if (solved(A)) printText("Pass: " + arg.pass, row+200, col+10);
    }
}

function test3(arg) {
    if (!arg.done) {
        let i = arg.idx, n = arg.buffer.length, A = arg.buffer, dbit = arg.done;

		/*****************from 'sort.js'************/	

		dbit = true;
		for (let k = 0; k < A.length; k+=2) { // even half-passes
			if (A[k+1] < A[k]) {
				dbit = false;
				[A[k+1], A[k]] = [A[k], A[k+1]]; // swaps the current and next element
			}
		}
		for (let k = 1; k < A.length; k+=2) { // odd half-passes
			if (A[k+1] < A[k]) {
				dbit = false;
				[A[k+1], A[k]] = [A[k], A[k+1]]; // swaps the current and next element
			}
		}

		/*****************from 'sort.js'************/	

        printText(A.toString(), row+400, col); 
        alg_3.save_state({ idx: ++i, pass: i, buffer: A, done: dbit });
        if (dbit) printText("Pass: " + arg.pass, row+400, col+10);
	}
}
