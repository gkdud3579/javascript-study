//피자 나눠 먹기(3)

function solution(slice, n) {
    // 사람 수를 피자 조각 수로 나누어 필요한 피자 판 수 계산
    let pizzaCount = Math.ceil(n / slice);

    return pizzaCount;
}