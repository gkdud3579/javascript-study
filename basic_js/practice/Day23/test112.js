//꼬리 문자열

function solution(str_list, ex) {
    const filteredStrings = str_list.filter(str => !str.includes(ex));
    const answer = filteredStrings.join('');
    return answer;
}