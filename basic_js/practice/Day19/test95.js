// 무작위로 K개의 수 뽑기

function solution(arr, k) {
    const result = [];
    const set = new Set();

    for (let num of arr) {
        if (!set.has(num)) {
            result.push(num);
            set.add(num);
        }

        if (result.length === k) {
            break;
        }
    }

    while (result.length < k) {
        result.push(-1);
    }

    return result;
}