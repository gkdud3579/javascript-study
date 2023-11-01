function solution(a, b) {
    var answer = 0;
    var aStr = a.toString();
    var bStr = b.toString();
    
    var plus = parseInt(aStr + bStr, 10);
    var multiply = parseInt(2 * aStr * bStr, 10);
    
    if(plus > multiply)
        answer = plus;
    else if(plus === multiply)
        answer = parseInt(aStr + bStr, 10);
    else
        answer = multiply;
    
    return answer;
}