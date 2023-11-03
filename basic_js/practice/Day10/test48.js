function solution(my_string, s, e) {
    var answer = '';
    my_string.slice;
    var str = my_string.substring(s, e + 1); //배열은 0부터 시작하니까
    var arr = str.split("");
    var revArr = arr.reverse();
    
    var joinStr = revArr.join('');
    var start = my_string.substring(0, s);
    var end = my_string.substring(e + 1); 
    
    answer = start + joinStr + end;
    return answer;
}