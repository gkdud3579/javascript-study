function solution(numLog) {
    var answer = '';
    var num = numLog[0];

    for (var i = 1; i < numLog.length; i++) {
        var diff = numLog[i] - numLog[i - 1];
        if (diff === 1) {
            answer += 'w';
            num++;
        } else if (diff === -1) {
            answer += 's';
            num--;
        } else if (diff === 10) {
            answer += 'd';
            num += 10;
        } else if (diff === -10) {
            answer += 'a';
            num -= 10;
        }
    }

    return answer;
}

// function solution(numLog) {
//     const convert = {
//         '1': 'w', '-1': 's', '10': 'd', '-10': 'a'
//     };

//     return numLog.slice(1).map((v, i) => {
//         return convert[v - numLog[i]]
//     }).join('')
// }