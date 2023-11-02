//접미사 배열

function solution(my_string) {
    var answer = [];
    
    for(var i = 0; i < my_string.length; i++){
        var tail = my_string.substr(i); //i부터 시작하는 접미사 추출 
        answer.push(tail); 
    }
    answer.sort(); //사전순으로 정열
    return answer;
}