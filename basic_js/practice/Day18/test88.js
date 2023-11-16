//간단한 식 계산하기

function solution(binomial) {
    var answer = 0;

    // 숫자와 연산자를 분리
    var match = binomial.match(/[0-9]+|[+\-*]/g);
    var a = parseInt(match[0]);
    var op = match[1];
    var b = parseInt(match[2]);

    // 연산 수행
    switch (op) {
        case '+':
            answer = a + b;
            break;
        case '-':
            answer = a - b;
            break;
        case '*':
            answer = a * b;
            break;
    }

    return answer;
}



// const ops = {
//     '+': (a, b) => a + b,
//     '-': (a, b) => a - b,
//     '*': (a, b) => a * b,
//   };
  
//   function solution(binomial) {
//     const [a, op, b] = binomial.split(' ');
//     return ops[op](+a, +b);
//   }