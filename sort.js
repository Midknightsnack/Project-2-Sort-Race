// ~~~REMOVE THIS FILE PRIOR TO SUBMISSION~~~

class Sort {
    constuctor = null;

    insertionSort(A) {
        for (let i = 0; i < A.length; ++i) {
            let deck = A[i], hand = i-1;
    
            // swaps elements in hand as long as deck element < current hand element
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
            // searches for the minimum element along A[0...n-i-1] elements
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
            dbit = false; // defaults to false for every new pass
            for (let k = 0; k < A.length; k+=2) { // even half-passes
                if (A[k+1] < A[k]) {
                    dbit = true;
                    [A[k+1], A[k]] = [A[k], A[k+1]]; // swaps the current and next element
                }
            }
            document.write('even: ' + A + '<br>');
            for (let k = 1; k < A.length; k+=2) { // odd half-passes
                if (A[k+1] < A[k]) {
                    dbit = true;
                    [A[k+1], A[k]] = [A[k], A[k+1]]; // swaps the current and next element
                }
            }
            document.write('odds: ' + A + '<br>');
    
        } while (dbit);
        return A;
    }

    mergeSort(A) {
        const n = A.length;
        let B = [], C = []; // auxiliary arrays used for merging sub-arrays

        if (n > 1) {
            B = this.mergeSort(A.slice(0, Math.floor(n/2)));
            C = this.mergeSort(A.slice(Math.floor(n/2)));
            return this.Merge(B, C);
        }
        return A;
    }

    Merge(B, C) {
        // no need to pass array, A, as it is already being returned recursively in the call-stack
        let A = [], i = 0, j = 0, p = B.length, q = C.length;

        document.write("Combining B: " + B + " and C: " + C + "<br>");
        while (i < p && j < q) { A.push((B[i] <= C[j]) ? B[i++] : C[j++]); }
        document.write("Sub-Array: " + [...A, ...B.slice(i, p), ...C.slice(j, q)] + "<br>");

        // returned array will concatenate 2 sub-arrays as one is deemed empty
        return [...A, ...B.slice(i, p), ...C.slice(j, q)];
    }

    quickSort(A) {
        const l = 0, r = A.length-1;

        // checks if sub-array contains one element or not
        if (l <= r) {
            let s = this.Partition(A, l, r);
            document.write("Pivot: " + s + "<br>");
            // calls recursively and returns an sorted array by appending the lhs+pivot+rhs sub-arrays
            return [...this.quickSort(A.slice(l, s)), A[s], ...this.quickSort(A.slice(s+1))];
        }
        return A;
    }

    Partition(A, l, r) {
        let p = A[l], i = l, j = r+1;

        document.write("Partition: " + A + "<br>");
        while (i < j) {
            while (i !== r && A[++i] <= p) continue; // cho nho (ben trai)
            while (j !== 0 && A[--j] >= p) continue; // cho lon (ben phai)
            document.write("l = " + i + " | r = " + j + "<br>");
            [A[i], A[j]] = [A[j], A[i]];
        };

        [A[i], A[j]] = [A[j], A[i]];
        [A[l], A[j]] = [A[j], A[l]]; // swaps pivot with smallest dog

        document.write("Sorted Sub-Array: " + A + "<br>");
        return j;
    }
}

const sort = new Sort();
