//문자열 바꿔서 찾기

function solution(myString, pat) {
    const transformedString = myString.replace(/A|B/g, match => (match === 'A' ? 'B' : 'A'));
    return transformedString.includes(pat) ? 1 : 0;
}