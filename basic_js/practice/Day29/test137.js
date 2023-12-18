//피자 나눠 먹기(2)

function solution(n) {
    let pizza = 6;
    while (pizza % n !== 0) {
        pizza += 6
    } return pizza / 6
}