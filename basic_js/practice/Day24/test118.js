// 조건에 맞게 수열 변환하기 3

function solution(arr, k) {
    var answer = [];
    for(var i = 0; i < arr.length; i++){
        if(k % 2 !== 0)
            answer.push(arr[i] * k);
        else
            answer.push(arr[i] + k);
    }
    return answer;
}


//const solution = (arr, k) => arr.map(v => k % 2 ? v * k : v + k)