//가까운 1찾기 

function solution(arr, idx) {
    var answer = -1;
    for(var i = 0; i < arr.length; i++){
        if(i >= idx && arr[i] === 1) {
            answer = i;
            break; // 찾았으면 루프 종료
        }
    }
    return answer;
}
