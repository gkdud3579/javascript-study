//뒤에서 5등까지

function solution(num_list) {
    var answer = num_list.sort((a, b) => a - b).slice(0, 5);
    return answer;
}