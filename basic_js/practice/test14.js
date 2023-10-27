function solution(a, b) {
    var answer = 0;
    var aStr = a.toString();
    var bStr = b.toString();
    
    var aFirst = parseInt(aStr + bStr, 10);
    var bFirst = parseInt(bStr + aStr, 10);
    
    if (aFirst > bFirst)
        answer = aFirst;
    else
        answer = bFirst;
    
    return answer;
}