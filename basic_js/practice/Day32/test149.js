//양꼬치

function solution(n, k) {
    const foodPrice = 12000;
    const drinkPrice = 2000;

    // 양꼬치와 음료수의 총 가격 계산
    let totalCost = (n * foodPrice) + (k * drinkPrice);

    // 서비스로 받은 음료수 개수 계산 (10인분 당 1개)
    let freeDrinks = Math.floor(n / 10);

    // 서비스로 받은 음료수 가격을 총 가격에서 빼줌
    totalCost -= freeDrinks * drinkPrice;

    return totalCost;
}