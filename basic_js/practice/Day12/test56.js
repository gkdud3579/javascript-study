//리스트 만들기

function solution(n, slicer, num_list) {
    var answer = [];
    var a = slicer[0];
    var b = slicer[1];
    var c = slicer[2];
    if(n === 1){
        for(var i = 0; i <= b; i++)
            answer.push(num_list[i]); 
    }
    else if(n === 2){
        for(var i = a; i < num_list.length; i++)
            answer.push(num_list[i]); 
    }
    else if(n === 3){
        for(var i = a; i <= b; i++)
            answer.push(num_list[i]); 
    }
    else
        for(var i = a; i <= b; i += c)
            answer.push(num_list[i]); 
    return answer;
}