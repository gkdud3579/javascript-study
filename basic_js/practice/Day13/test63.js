function solution(str_list) {
    var answer = [];
    for (var i = 0; i < str_list.length; i++) {
        if (str_list[i] === "l") {
            // "l"이 나왔을 때의 동작 구현
            answer = str_list.slice(0, i);
            break; // 왼쪽에 있는 문자열들을 찾았으므로 반복 종료
        } else if (str_list[i] === "r") {
            // "r"이 나왔을 때의 동작 구현
            answer = str_list.slice(i + 1);
            break; // 오른쪽에 있는 문자열들을 찾았으므로 반복 종료
        }
    }
    return answer;
}
