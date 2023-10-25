
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let answer = "";

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];

    for(let i = 0; i < str.length; i++) {
        if(str[i] === str[i].toLowerCase()) {
            answer += str[i].toUpperCase();
        } else {
            answer += str[i].toLowerCase();
        }
    }

    console.log(answer);
});