//뒤에서 5등 위로


function solution(num_list) {
    var sliceNum = num_list.sort((a, b) => a - b).slice(0, 5);
    var answer = num_list.slice(sliceNum.length, num_list.length);
    return answer;
}