//최빈값 구하기

function solution(array) {
    array.sort((a, b) => (a - b));

    let maxCount = 0; // 현재까지 최빈값의 빈도수
    let currentCount = 1; // 현재 값의 빈도수
    let answer = array[0]; // 최빈값
    
    for (let i = 1; i < array.length; i++) {
        if (array[i] === array[i - 1]) {
            currentCount++;
        } else {
            currentCount = 1;
        }

        if (currentCount > maxCount) {
            maxCount = currentCount;
            answer = array[i];
        } else if (currentCount === maxCount) {
            answer = -1; // 최빈값이 여러 개인 경우 -1 반환
        }
    }

    return answer;
}