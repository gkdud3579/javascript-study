const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = "HelloWorld!";

rl.on('line', function (line) {
    input = line;
    rl.close();
}).on('close', function() {
    console.log(input);
});