//2의 영역

function solution(arr) {
    var answer = [];
    var startIdx = -1;
    var endIdx = -1;

    // 2가 나오는 시작 인덱스와 끝 인덱스 찾기
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 2) {
            if (startIdx === -1) {
                startIdx = i;
            }
            endIdx = i;
        }
    }

    // 2가 나오는 구간이 없으면 [-1] 반환
    if (startIdx === -1) {
        return [-1];
    }

    // 2가 나오는 부분 배열 반환
    for (var j = startIdx; j <= endIdx; j++) {
        answer.push(arr[j]);
    }

    return answer;
}
