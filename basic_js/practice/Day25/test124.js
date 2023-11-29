//이차원 배열 대각선 순회하기

function solution(board, k) {
    const numRows = board.length;
    const numCols = board[0].length;
    let sum = 0;

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (i + j <= k) {
                sum += board[i][j];
            }
        }
    }

    return sum;
}


// function solution(board, k) {
//     return board.reduce(
//       (total, row, i) => total + row.reduce((prev, num, j) => (i + j <= k ? prev + num : prev), 0),
//       0,
//     );
//   }