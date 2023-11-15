//소문자로 바꾸기

function solution(myString) {
    var answer = '';
    for(var i = 0; i < myString.length; i++){
        answer = myString.toLowerCase();
    }
    return answer;
}