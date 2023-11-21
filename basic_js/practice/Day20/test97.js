//배열 비교하기


function solution(arr1, arr2) {
    const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);

    const sum1 = sum(arr1);
    const sum2 = sum(arr2);

    if (arr1.length < arr2.length) {
        return -1;
    } else if (arr1.length > arr2.length) {
        return 1;
    } else {
        return sum1 === sum2 ? 0 : (sum1 < sum2 ? -1 : 1);
    }
}