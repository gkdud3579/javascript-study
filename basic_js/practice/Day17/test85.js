//공백으로 구분하기 2

function solution(my_string) {
    // 문자열을 공백을 기준으로 분리하고, 빈 문자열은 제외한다.
    return my_string.split(/\s+/).filter(word => word !== "");
}