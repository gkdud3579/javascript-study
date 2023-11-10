//첫 번째로 나오는 음수

function solution(num_list) {
    var answer = -1;  // 초기값을 -1로 설정
    for (var i = 0; i < num_list.length; i++) {
        if (num_list[i] < 0) {
            answer = i;
            break;  // 음수를 찾았으면 반복문을 종료
        }
    }
    return answer;
}
