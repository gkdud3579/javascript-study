//x사이의 개수

function solution(myString) {
    var answer = [];
    var parts = myString.split("x");

    for (var i = 0; i < parts.length; i++) {
        answer.push(parts[i].length);
    }

    return answer;
}


// function solution(myString) {
//     return myString.split('x').map(v => v.length);
// }