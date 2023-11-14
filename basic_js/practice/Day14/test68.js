//할일 목록

function solution(todo_list, finished) {
    var answer = [];
    var countFalse = 0;
    for(var i = 0; i <finished.length; i++){
        if(finished[i] === false)
            answer.push(todo_list[i]);
    }
    return answer;
}