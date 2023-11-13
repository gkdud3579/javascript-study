//순서바꾸기

function solution(num_list, n) {
    var answer = [];
    for(var i = n; i < num_list.length; i++){
        answer.push(num_list[i]);
    }
    for(var j = 0; j < n; j++){
        answer.push(num_list[j]);
    }
    return answer;
}