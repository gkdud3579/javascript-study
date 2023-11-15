//대문자 만들기

function solution(myString) {
    var answer = '';
    for(var i = 0; i < myString.length; i++){
        answer = myString.toUpperCase();
    }
    return answer;
}