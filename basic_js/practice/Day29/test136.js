//피자 나눠 먹기(1)

function solution(n) {
    const pizzaPieces = 7; // 피자의 조각 수
    const pizzaCount = Math.ceil(n / pizzaPieces); // 올림을 사용하여 필요한 피자 판 수 계산
    return pizzaCount;
}