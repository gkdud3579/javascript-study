//배열 두배 만들기

function solution(numbers) {
    var answer = [];
    for(var i = 0; i < numbers.length; i++){
        answer += numbers[i] * 2;
    }
    return answer;
}

//다른 풀이방법
function solution(numbers) {
    return numbers.map(number => number * 2);
}