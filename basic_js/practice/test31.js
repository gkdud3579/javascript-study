function solution(arr, queries) {
    const n = arr.length;
    const answer = arr.slice();

    for (const query of queries) {
        const [s, e, k] = query;

        for (let i = s; i <= e; i++) {
            if (i % k === 0) {
                answer[i]++;
            }
        }
    }

    return answer;
}
