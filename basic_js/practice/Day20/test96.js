// 배열의 길이를 2의 거듭제곱으로 만들기

function solution(arr) {
    const length = arr.length;
    
    // 현재 배열의 길이가 2의 거듭제곱이라면 그대로 반환
    if ((length & (length - 1)) === 0) {
        return arr;
    }

    // 필요한 0의 개수 계산
    const neededZeros = Math.pow(2, Math.ceil(Math.log2(length))) - length;

    // 필요한 0의 개수만큼 배열에 0 추가
    const result = [...arr, ...Array(neededZeros).fill(0)];

    return result;
}