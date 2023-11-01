function solution(my_string, index_list) {
    var answer = [];
    for (var i = 0; i < index_list.length; i++) {
        answer.push(my_string[index_list[i]]); //ex) i = 0, index_list = 16, my_string의 16번째 글자를 answer 배열에 더하기
    }
    return answer.join(''); // ex) 'p', 'r', 'o' 이렇게 나뉘어진 배열을 '' 공백없이 출력하기 위해서
}
