//문자 개수 세기

function solution(my_string) {
    // 52개의 0으로 초기화된 배열 생성
    var answer = Array(52).fill(0);

    for (var i = 0; i < my_string.length; i++) {
        var charCode = my_string.charCodeAt(i);
        
        // 대문자 알파벳(A-Z)인 경우
        if (charCode >= 65 && charCode <= 90) {
            answer[charCode - 65]++;
        }
        // 소문자 알파벳(a-z)인 경우
        else if (charCode >= 97 && charCode <= 122) {
            answer[charCode - 71]++;
        }
    }

    return answer;
}