function solution(arr) {
    var answer = 0;
    var n = arr.length;
    
    if (n >= 1 && n <= 100) {
        for (var i = 0; i < n; i++) {
            answer += arr[i];
        }
        answer = answer / n;
    }

    return answer;
}