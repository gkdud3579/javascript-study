//카운트 다운
function solution(start, end_num) {
    var answer = [];
    for(var i = start; i >= end_num; i--)
        answer.push(i);
    return answer;
}