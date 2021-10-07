function insertionSort(A) {
    for (let i = 0; i < A.length; ++i) {
        let deck = A[i], hand = i-1;
        while (hand >= 0 && A[hand] > deck) { A[hand+1] = A[hand--]; }
        A[hand+1] = deck;
    }
    return A;
}

function selectionSort(A) {
    let min;
    for (let i = 0; i < A.length; ++i) {
        min = i;
        for (let j = i+1; j < A.length; ++j) {
            if (A[j] < A[min]) min = j;
        }
        [A[i], A[min]] = [A[min], A[i]];
    }
    return A;
}

function goldPoreSort(A) {
    let dbit; // keeps track when list is sorted
    do {
        dbit = false;
        for (let k = 0; k < A.length; k+=2) { // even half-passes
            if (A[k+1] < A[k]) {
                dbit = true;
                [A[k+1], A[k]] = [A[k], A[k+1]];
            }
        }
        for (let k = 1; k < A.length; k+=2) { // odd half-passes
            if (A[k+1] < A[k]) {
                dbit = true;
                [A[k+1], A[k]] = [A[k], A[k+1]];
            }
        }
    } while (dbit);
    return A;
}