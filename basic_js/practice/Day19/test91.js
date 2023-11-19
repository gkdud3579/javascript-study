//세 개의 구분자

function solution(myStr) {
    var answer = [];
    var parts = myStr.split(/[a-c]/g);
    for(var i = 0; i < parts.length; i++){
        if (parts[i] !== "") {
            answer.push(parts[i]);
        }
    }
    return answer.length > 0 ? answer : ["EMPTY"];
}