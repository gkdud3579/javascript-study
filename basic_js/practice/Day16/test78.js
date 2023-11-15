//배열에서 문자열 대소문자 변환하기


function solution(strArr) {
    var answer = [];
    for (var i = 0; i < strArr.length; i++) {
        // 홀수번째 인덱스면 대문자로, 짝수번째 인덱스면 소문자로 변환
        if (i % 2 === 0) {
            answer.push(strArr[i].toLowerCase());
        } else {
            answer.push(strArr[i].toUpperCase());
        }
    }
    return answer;
}