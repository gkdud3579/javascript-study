//두 수의 합

function solution(a, b){
    const bigIntA = BigInt(a);
    const bigIntB = BigInt(b);
    const answer = bigIntA + bigIntB;
    return answer.toString();
}
