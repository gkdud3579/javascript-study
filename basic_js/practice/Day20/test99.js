//배열의 길이에 따라 다른 연산하기


function solution(arr, n) {
    var answer = [];
    
    if (arr.length % 2 !== 0) {
        for (var i = 0; i < arr.length; i++) {
            if (i % 2 === 0)
                answer.push(arr[i] + n);
            else
                answer.push(arr[i]);
        }
    } else {
        for (var j = 0; j < arr.length; j++) {
            if (j % 2 !== 0)
                answer.push(arr[j] + n);
            else
                answer.push(arr[j]);
        }
    }
    
    return answer;
}
