//짝수 vs 홀수

function solution(num_list) {
    var oddSum = 0; // 홀수 번째 원소들의 합
    var evenSum = 0; // 짝수 번째 원소들의 합

    for (var i = 0; i < num_list.length; i++) {
        if (i % 2 === 0) {
            // 짝수 번째 원소
            evenSum += num_list[i];
        } else {
            // 홀수 번째 원소
            oddSum += num_list[i];
        }
    }

    // 두 값 중에서 큰 값을 선택
    answer = Math.max(oddSum, evenSum);

    return answer;
}
