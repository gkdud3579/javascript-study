const operations = {
  '>=': (n, m) => n >= m,
  '<=': (n, m) => n <= m,
  '>!': (n, m) => n > m,
  '<!': (n, m) => n < m,
};

function solution(ineq, eq, n, m) {
  const op = operations[ineq + eq];
  return Number(op(n, m));
}

// function solution(ineq, eq, n, m) {
//     if (eq === '=' && n === m) return 1
//     if (ineq === '<' && n < m) return 1
//     if (ineq === '>' && n > m) return 1
//     return 0
// }