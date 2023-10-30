function solution(num_list) {
    var answer = [];
    
    for(var i = 0; i < num_list.length; i++) {
        answer[i] = num_list[i];
    }
    
    const lastValue = answer[answer.length - 1];
    
    if (lastValue > answer[answer.length - 2])
        answer.push(lastValue - answer[answer.length - 2]);
        
    else 
        answer.push(lastValue * 2);
    
    return answer;
}