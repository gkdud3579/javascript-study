//수열과 구간 쿼리1

function solution(arr, queries) {
    var answer = [...arr];  // arr를 복사하여 새로운 배열 생성

    for (var q = 0; q < queries.length; q++) {
        var s = queries[q][0];
        var e = queries[q][1];

        for (var i = s; i <= e; i++) {
            answer[i]++;
        }
    }

    return answer;
}
