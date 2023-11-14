function solution(arr) {
    let idx = 0;

    while (true) {
        // 현재 배열을 조건에 맞게 변환
        const changeCurArr = arr.map(a => (a >= 50 && a % 2 === 0) ? a / 2 : (a < 50 && a % 2 === 1) ? a * 2 + 1 : a);

        // 이전의 모든 배열과 현재 모든 배열의 요소 비교
        if (arr.every((a, i) => a === changeCurArr[i])) break;

        idx += 1;

        // 현재 배열을 이전 배열 변수에 저장함
        arr = changeCurArr;
    }

    return idx;
}
