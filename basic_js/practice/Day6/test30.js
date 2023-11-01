function solution(arr, queries) {
    const answer = [];

    for (const query of queries) {
        const [s, e, k] = query;
        let minGreater = Infinity;

        for (let i = s; i <= e; i++) {
            if (arr[i] > k && arr[i] < minGreater) {
                minGreater = arr[i];
            }
        }

        if (minGreater === Infinity) {
            answer.push(-1);
        } else {
            answer.push(minGreater);
        }
    }

    return answer;
}


// function solution(arr, queries) {
//     return queries.map(([s, e, k]) => arr.slice(s, e + 1).filter((n) => n > k).sort((a, b) => a - b)[0] || -1);
// }