//부분 문자열인지 확인하기

function solution(my_string, target) {
    var answer = 0;
    for (var i = 0; i < my_string.length; i++) {
        if (my_string.includes(target)) {
            answer = 1;
            break;
        } else {
            answer = 0;
        }
    }
    return answer;
}


// function solution(my_string, target) {
//     return my_string.includes(target) ? 1 : 0;
// }