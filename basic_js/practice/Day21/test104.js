// 문자열 정수의 합

function solution(num_str) {
    const answer = num_str.split('').reduce((acc, cur) => acc + parseInt(cur, 10), 0);
    return answer;
}

// function solution(num_str) {
//     return [...num_str].reduce((a, c) => a + +c, 0)
// }