//특정 문자열로 끝나는 가장 긴 부분 문자열 찾기

function solution(myString, pat) {
    var answer = '';

    // myString에서 pat으로 끝나는 가장 긴 부분 문자열 찾기
    for (var i = 0; i < myString.length; i++) {
        if (myString.substring(i - pat.length + 1, i + 1) === pat) {
            // pat으로 끝나는 경우 부분 문자열 업데이트
            answer = myString.substring(0, i + 1);
        }
    }

    return answer;
}