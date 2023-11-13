//n번째 원소까지

function solution(num_list, n) {
    var answer = [];
    for(var i = 0; i < n; i++){
        answer.push(num_list[i]);
    }
    return answer;
}