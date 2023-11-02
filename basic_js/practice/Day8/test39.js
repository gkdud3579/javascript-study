function solution(number) {
    let answer = 0;
    for (let i = 0; i < number.length; i++) {
        answer += parseInt(number[i]); //각 자리의 숫자 합을 구하기 위해
    }
    return answer % 9; // 각 자리의 숫자 합을 9로 나눈 나머지 출력
}
