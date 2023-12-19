//아이스 아메리카노

function solution(money) {
    const iceAmericano = 5500;
    const cups = Math.floor(money / iceAmericano);
    const change = money % iceAmericano;
    return [cups, change];
}