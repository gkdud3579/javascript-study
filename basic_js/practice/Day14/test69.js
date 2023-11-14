//n보다 커질떄까지 더하기

function solution(numbers, n) {
    var answer = 0;
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        if (sum > n)
            return answer + sum; // answer에 sum을 더해줘야 함
    }
    return answer + sum; // 모든 원소를 더한 후에도 처리되어야 함
}
