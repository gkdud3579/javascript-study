//길이에 따른 연산

function solution(num_list) {
    var answer = (num_list.length >= 11) ? 0 : 1; //곱하기의 경우, 초기값이 0이면 모든 값이 0이 되기때문

    for (var i = 0; i < num_list.length; i++) {
        if (num_list.length >= 11)
            answer += num_list[i];
        else
            answer *= num_list[i];
    }

    return answer;
}