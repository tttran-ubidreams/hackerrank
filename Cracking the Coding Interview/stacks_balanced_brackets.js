// https://www.hackerrank.com/challenges/ctci-balanced-brackets/

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

function isBalancedBrackets (ex) {

    var val = ex.split("");
    var i = 0;
    var stack = [];
    var a = ["[", "{", "("];
    var b = ["]", "}", ")"];

    while (i < ex.length) {
        if (a.find((item) => item == ex[i])) {
            stack.push(ex[i]);
        } else {
            if (ex[i] == b[a.findIndex((item) => item == stack[stack.length - 1])]) {
                stack.pop();
            } else {
                console.log("NO");
                return;
            }
        }

        i ++;
    }

    if (stack.length > 0) {
        console.log("NO");
        return;
    }

    console.log("YES");
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var expression = readLine();
        isBalancedBrackets(expression);
    }

}
