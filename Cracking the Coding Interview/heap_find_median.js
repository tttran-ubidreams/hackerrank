// https://www.hackerrank.com/challenges/ctci-find-the-running-median


process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var n = parseInt(readLine());
    var a = [];

    function parent(index) {
        return Math.floor((index - 1) / 2);
    }

    function left(index) {
        return (index * 2) + 1;
    }

    function right(index) {
        return (index * 2) + 2;
    }

    function isGT(a, b) {
        return a > b;
    }

    function isST(a, b) {
        return a < b;
    }
    // >
    function insertKey(heap, key, ex) {

        heap.push(key);
        let index = heap.length - 1;
        while (index!=0 && ex(heap[parent(index)],heap[index]) ) {

            let parentIndex = parent(index);
            [heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]];
            index = parentIndex;
        }
        return heap;
    }

    function heapify(heap, i, ex) {
        let l = left(i);
        let r = right(i);
        let val = i;
        if (!l) {
            return heap;
        }

        if (l < heap.length && ex(heap[l], heap[val])) {
            val = l;
        }
        if (r < heap.length && ex(heap[r], heap[val])) {
            val = r;
        }
        if (val != i) {
            [heap[i], heap[val]] = [heap[val], heap[i]];
            heap = heapify(heap, val, ex);
        }

        return heap;
    }

    function poll(heap, ex) {

        if (heap.length == 1)
        {
            heap.pop();
            return heap;
        }

        heap.shift();
        heap = heapify(heap, 0, ex);

        return heap;
    }
    function balance(h1, h2) {
        while (h1.length>0 && h2.length >0 && h1[0] > h2[0]) {
            var max = h1[0];
            h1 = poll(h1, isGT);
            var min = h2[0];
            h2 = poll(h2, isST);
            h1 = insertKey(h1, min, isST);
            h2 = insertKey(h2, max, isGT);
        }

        return {
            h1: h1,
            h2: h2
        }
    }


    let result = [];
    let h1 = [];
    let h2 = [];

    for(var a_i = 0; a_i < n; a_i++){
        a[a_i] = parseInt(readLine());
        if (h1.length <= h2.length) {
            h1 = insertKey(h1, a[a_i], isST);
        } else {
            h2 = insertKey(h2, a[a_i], isGT);
        }
        h1 = balance(h1, h2).h1;
        h2 = balance(h1, h2).h2;

        if (h1.length == h2.length) {
            var max = h1[0];
            var min = h2[0];
            console.log(((max + min) / 2).toFixed(1));
        }
        else if (h1.length == (h2.length + 1)) {
            console.log(h1[0].toFixed(1));


        } else {
            console.log(h2[0].toFixed(1));
        }

    }

}
