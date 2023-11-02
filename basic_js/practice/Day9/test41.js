//배열 만들기 5

function solution(intStrs, k, s, l) {
    var answer = [];
    
    for (var i = 0; i < intStrs.length; i++) {
        var str = intStrs[i].substr(s, l); // 문자열을 잘라내서 str 변수에 저장
        var num = parseInt(str); // 잘라낸 문자열을 정수로 변환
        
        if (num > k) {
            answer.push(num); // k보다 큰 경우에만 결과 배열에 추가
        }
    }
    
    return answer;
}
