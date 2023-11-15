//문자열이 몇번 등장하는지 세기

function solution(myString, pat) {
    var answer = 0;
    var index = myString.indexOf(pat);

    while (index !== -1) {
        // pat이 등장하는 위치부터 그 뒤의 부분 문자열을 기준으로 다시 검색
        index = myString.indexOf(pat, index + 1);
        answer++;
    }

    return answer;
}