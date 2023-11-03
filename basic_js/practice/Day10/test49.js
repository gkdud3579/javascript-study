//세로 읽기

function solution(my_string, m, c) {
    var answer = '';
    
    // my_string을 m 글자씩 나눕니다.
    for (var i = c - 1; i < my_string.length; i += m) {
        answer += my_string[i];
    }
    
    return answer;
}