function isGoodNumber(num){
    const numStr = num.toString();
    return /^[05]+$/.test(numStr);
}

function solution(l, r) {
    var answer = [];
    
    for(let i = l; i <= r; i++){
        if(isGoodNumber(i))
            answer.push(i);
    }
    
    if(answer.length === 0)
        return [-1];
    else
        return answer;
}