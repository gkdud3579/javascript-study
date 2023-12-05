//특정한 문자를 대문자로 바꾸기

const solution=(s,a)=>s.replaceAll(a,a.toUpperCase())

// function solution(my_string, alp) {
//     var answer = '';
//     if (my_string.includes(alp)) {
//         answer = my_string.replace(new RegExp(alp, 'g'), alp.toUpperCase());
//     } else {
//         answer = my_string;
//     }
//     return answer;
// }