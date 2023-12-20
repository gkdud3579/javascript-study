//짝수 홀수 개수

function solution(num_list) {
    // map을 사용하여 각 원소를 짝수(0) 또는 홀수(1)로 변환
    const mapped = num_list.map(num => num % 2);

    // reduce를 사용하여 짝수와 홀수의 개수를 계산
    const result = mapped.reduce(
        (acc, num) => {
            acc[num]++;
            return acc;
        }, 
        [0, 0] // 초기값: [짝수 개수, 홀수 개수]
    );

    return result;
}
