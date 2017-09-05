// https://www.hackerrank.com/challenges/ctci-making-anagrams

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
    var a = readLine();
    var b = readLine();
    var result = new Array(27);

    for(var i = 0; i<27; i++) {
        result[i] = 0;
    }

    for(var j = 0; j<a.length; j++) {
        result[a[j].charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    for(var k = 0; k<b.length; k++) {
        result[b[k].charCodeAt(0) - "a".charCodeAt(0)]--;
    }

    var count = 0;

    for(var l = 0; l<result.length; l++) {
        count += Math.abs(result[l]);
    }

    console.log(count);

}
