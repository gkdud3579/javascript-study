// 배열의 원소만큼 추가하기

function solution(arr) {
    var answer = [];
    
    for (var i = 0; i < arr.length; i++) {
        var count = arr[i];
        
        for (var j = 0; j < count; j++) {
            answer.push(arr[i]);
        }
    }
    return answer;
}


// function solution(arr) {
//     return arr.reduce((a, c) => a.concat(Array(c).fill(c)), [])
// }