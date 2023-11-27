//특별한 이차원 배열 2

function solution(arr) {
    var answer = 1;
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < i; j++){
            if(arr[i][j] !== arr[j][i]){
                answer = 0;
                break;
            }
        }
    }
    return answer;
}