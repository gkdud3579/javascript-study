//l로 만들기


function solution(myString) {
    var answer = '';
    for (var i = 0; i < myString.length; i++) {
        if (myString[i] < 'l') {
            answer += 'l';
        } else {
            answer += myString[i];
        }
    }
    return answer;
}


//const solution = myString => myString.replace(/[a-k]/g,'l')