//조건에 맞게 수열 변환하기 2

function solution(arr) {
    var answer = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] >= 50 && arr[i] % 2 === 0)
            answer = arr[i] / 2;
        else if(arr[i] < 50 && arr[i] % 2 !== 0)
            answer = arr[i] * 2 + 1;
        else
            answer = arr[i];
        answer = Math.min(i);
    }
    return answer;
}