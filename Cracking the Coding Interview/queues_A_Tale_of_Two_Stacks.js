function processData(input) {
    input = input.split("\n");

    var qu = Array();

    for (var i = 1; i <= input[0]; i++) {
        var a = input[i];
        var b = a.split(" ");

        switch (b[0]) {
            case "1":
                qu.push(b[1]);
                break;

            case "2":
                qu.shift();
                break;

            case "3":
                console.log(qu[0]);
                break;
        }
    }

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
