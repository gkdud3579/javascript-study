function solution(num_list) {
    var answer = 0;
    var mul = 1;
    var sum = 0;
    for (var i = 0; i < num_list.length; i++){
        sum += num_list[i];
        mul *= num_list[i];
    }
    sum = Math.pow(sum, 2);
    
    if(mul < sum)
        answer = 1;
    else
        answer = 0;
        
    return answer;
}