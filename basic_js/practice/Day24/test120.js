//특별한 이차원 배열 1

function solution(n) {
    const result = [];

    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            row.push(i === j ? 1 : 0);
        }
        result.push(row);
    }

    return result;
}