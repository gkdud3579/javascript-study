//배열의 평균값

function solution(numbers) {
    // 배열의 원소 합계를 계산
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    // 평균값 계산 (총합 / 원소의 개수)
    const average = sum / numbers.length;

    return average;
}