//조건에 맞게 수열 변환하기 1

function solution(arr) {
    var answer = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && arr[i] >= 50)
            answer[i] = arr[i] / 2;
        else if (arr[i] % 2 !== 0 && arr[i] < 50)
            answer[i] = arr[i] * 2;
        else
            answer[i] = arr[i];
    }
    return answer;
}
