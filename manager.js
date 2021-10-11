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

    save(CB) {
        this.CB = CB;
    }

    restore() {
        return this.CB;
    }

    execute() {
        switch(this.name) {
            case "Insertion" : test1(this.restore()); break;
            case "Selection" : test2(this.restore()); break;
            case "GoldsPore" : test3(this.restore()); break;
            default : break;
        }
    }
}

function test1(arg) {
    if (!arg.done) {
        let i = arg.idx, n = arg.buffer.length, A = arg.buffer;

        let deck = A[i], hand = i-1;
        // swaps elements in hand as long as deck element < current hand element
        while (hand >= 0 && A[hand] > deck) { A[hand+1] = A[hand--]; }
        A[hand+1] = deck;

        printText(A.toString(), row, col); 
        arg.idx = ++i;
        arg.pass = i;
        arg.done = (i === n ? true : false); 
        arg.buffer = A;

        if (arg.done) printText("Pass: " + arg.pass, row, col+10);

        alg_1.save(arg);
    }
}

function test2(arg) {
    if (!arg.done) {
        let i = arg.idx, n = arg.buffer.length, A = arg.buffer;

        let min = i;
        // searches for the minimum element along A[0...n-i-1] elements
        for (let j = i+1; j < A.length; ++j) {
            if (A[j] < A[min]) min = j;
        }
        [A[i], A[min]] = [A[min], A[i]];

        printText(A.toString(), row+200, col); 

        arg.idx = ++i;
        arg.pass = i;
        arg.done = (i === n ? true : false); 

        if (arg.done) printText("Pass: " + arg.pass, row+200, col+10);

        arg.buffer = A;
        alg_2.save(arg);
    }
}

function test3(arg) {
    if (!arg.done) {
        let i = arg.idx, n = arg.buffer.length, A = arg.buffer, dbit = arg.done;

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

        printText(A.toString(), row+400, col); 

        arg.idx = ++i;
        arg.pass = i;
        arg.done = dbit;

        if (dbit) printText("Pass: " + arg.pass, row+400, col+10);

        arg.buffer = A;
        alg_3.save(arg);
	}
}
