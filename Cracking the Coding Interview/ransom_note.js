process.stdin.resume();
process.stdin.setEncoding('ascii');

// https://www.hackerrank.com/challenges/ctci-ransom-note

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
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    magazine = readLine().split(' ');
    ransom = readLine().split(' ');

    if (m < n) {
        console.log("No");
        return;
    }
    var i = 0;
    while (i < ransom.length) {
        var l = ransom[i];
        let magazineIndex = magazine.findIndex(function (item) {return item == l});
        if (magazineIndex < 0){
            console.log("No");
            return;
        }

        magazine.splice(magazineIndex, 1);
        i++;
    }
    console.log("Yes");
}
