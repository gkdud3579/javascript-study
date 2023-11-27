//정수를 나선형으로 배치하기

function solution(n) {
    const answer = Array.from(Array(n), () => Array(n).fill(0)); // n x n 배열 초기화

    let num = 1; // 나선형으로 배치할 정수 값

    let startRow = 0,
        startCol = 0,
        endRow = n - 1,
        endCol = n - 1;

    while (startRow <= endRow && startCol <= endCol) {
        // 오른쪽 방향
        for (let i = startCol; i <= endCol; i++) {
            answer[startRow][i] = num++;
        }
        startRow++;

        // 아래쪽 방향
        for (let i = startRow; i <= endRow; i++) {
            answer[i][endCol] = num++;
        }
        endCol--;

        // 왼쪽 방향
        for (let i = endCol; i >= startCol; i--) {
            answer[endRow][i] = num++;
        }
        endRow--;

        // 위쪽 방향
        for (let i = endRow; i >= startRow; i--) {
            answer[i][startCol] = num++;
        }
        startCol++;
    }

    return answer;
}