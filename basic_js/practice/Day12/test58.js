//배열 만들기 3

function solution(arr, intervals) {
    var answer = [];
    var a1 = intervals[0][0];
    var b1 = intervals[0][1];
    var a2 = intervals[1][0];
    var b2 = intervals[1][1];
    for(var i = a1; i <= b1; i++)
        answer.push(arr[i]);
    for(var j = a2; j <= b2; j++)
        answer.push(arr[j]);
    return answer;
}