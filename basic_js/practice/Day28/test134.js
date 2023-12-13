//중앙값 구하기

function solution(array) {
    array.sort((a, b) => (a - b));
    const middleArray = Math.floor(array.length / 2);
    return array[middleArray];
}