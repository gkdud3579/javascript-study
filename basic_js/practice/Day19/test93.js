//빈 배열에 추가, 삭제하기

function solution(arr, flag) {
    var answer = [];
    
    for (var i = 0; i < flag.length; i++) {
        var count = arr[i] * 2;
        
        if (flag[i]) {
            for (var j = 0; j < count; j++) {
                answer.push(arr[i]);
            }
        } 
        else {
            answer = answer.slice(0, -arr[i]);
        }
    }
        
    return answer;
}