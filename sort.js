/*
    Class: CPSC 335-03
    Assignment: Project 2 - Sort Race

    Authors:
        Valerie Martinez (valeriemartnz@csu.fulleron.edu)
        Anthony Sanchez (sanchezanthony244@csu.fullerton.edu)
        Bradley Diep (bdippin12@csu.fullerton.edu)
        Jason Duong (reddkingdom@csu.fullerton.edu)

    Description:
        Fundamental Implementations of Sorting Algorithms
 */

class Sort {
    constuctor = null;

    insertionSort(A) {
        for (let i = 0; i < A.length; ++i) {
            let deck = A[i], hand = i-1;
    
            while (hand >= 0 && A[hand] > deck) { A[hand+1] = A[hand--]; }
            A[hand+1] = deck;
    
            document.write(A + '<br>')
        }
        return A;
    }
    
    selectionSort(A) {
        let min;
    
        for (let i = 0; i < A.length; ++i) {
            min = i;
            for (let j = i+1; j < A.length; ++j) {
                if (A[j] < A[min]) min = j;
            }
            [A[i], A[min]] = [A[min], A[i]];
    
            document.write(A + '<br>');
        }
        return A;
    }
    
    goldPoreSort(A) {
        let dbit; // keeps track when list is sorted
    
        do {
            dbit = false;
            for (let k = 0; k < A.length; k+=2) { // even half-passes
                if (A[k+1] < A[k]) {
                    dbit = true;
                    [A[k+1], A[k]] = [A[k], A[k+1]];
                }
            }
            document.write('even: ' + A + '<br>');
            for (let k = 1; k < A.length; k+=2) { // odd half-passes
                if (A[k+1] < A[k]) {
                    dbit = true;
                    [A[k+1], A[k]] = [A[k], A[k+1]];
                }
            }
            document.write('odds: ' + A + '<br>');
    
        } while (dbit);
        return A;
    }

    mergeSort(A) {
        const n = A.length;
        let B = [], C = [];

        if (n > 1) {
            B = this.mergeSort(A.slice(0, Math.floor(n/2)));
            C = this.mergeSort(A.slice(Math.floor(n/2)));
            return this.Merge(B, C, A);
        }
		return A;
    }

    Merge(B, C, A) {
        let i = 0, j = 0, k = 0, p = B.length, q = C.length;

	    document.write("Combining B: " + B + " and C: " + C + "<br>");
        while (i < p && j < q) {
		    A[k++] = ((B[i] <= C[j]) ? B[i++] : C[j++]);
	    }

		document.write("Sub-Array: " + [...A, ...B.slice(i, p), ...C.slice(j, q)] + "<br>");
		return [...A, ...B.slice(i, p), ...C.slice(j, q)];
    }

    quickSort(A) {
        const l = 0, r = A.length-1;

        if (l <= r) {
            let s = this.Partition(A, l, r);
            document.write("Pivot: " + s + "<br>");
            this.quickSort(A.slice(l, s));
            this.quickSort(A.slice(s+1, r+1));
            document.write("new:" + A + "<br>");
        }
    }

    Partition(A, l, r) {
        let p = A[l], i = l, j = r+1;

        document.write("Partition: " + A + "<br>");
        while (i < j) {
            while (i !== r && A[++i] <= p) continue;
            while (j !== 0 && A[--j] >= p) continue;
            document.write("l = " + i + " | r = " + j + "<br>");
            [A[i], A[j]] = [A[j], A[i]];
        };

        [A[i], A[j]] = [A[j], A[i]];
        [A[l], A[j]] = [A[j], A[l]];

        document.write("Sorted Sub-Array: " + A + "<br>");
        return j;
    }
}

const sort = new Sort();
