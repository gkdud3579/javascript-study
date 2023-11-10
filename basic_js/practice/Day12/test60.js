//배열 조각하기

function solution(arr, query) {
    // query 배열을 순회하면서 작업을 수행
    for (let i = 0; i < query.length; i++) {
        const cur = query[i]; // 현재 query의 값

        // 짝수 인덱스 처리
        if (i % 2 === 0) {
            // arr 배열에서 cur+1 인덱스부터 끝까지의 요소를 제거
            arr.splice(cur + 1, arr.length - (cur + 1));
        } else {
            // 홀수 인덱스 처리
            // arr 배열에서 처음부터 cur 인덱스까지의 요소를 제거
            arr.splice(0, cur);
        }
    }

    // 최종적으로 변형된 arr을 반환
    return arr;
}
