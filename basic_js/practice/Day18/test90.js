//rny_string

function solution(rny_string) {
    var answer = '';
    answer = rny_string.replace(/m/g, match => (match === 'm' ? 'rn' : 'rn'));
    return answer;
}