//부분 문자열이어 붙여 문자열 만들기

function solution(my_strings, parts) {
    var answer = '';
    
    for(var i = 0; i < parts.length; i++){
        var start = parts[i][0];
        var end = parts[i][1];
        
        var partsStr = my_strings[i].substring(start, end + 1);
        answer += partsStr;
    }
    return answer;
}