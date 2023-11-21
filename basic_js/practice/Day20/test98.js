//문자열 묶기


function solution(strArr) {
    const groupedByLength = {};

    // 각 문자열을 길이에 따라 그룹화
    for (const str of strArr) {
        const length = str.length;
        if (!groupedByLength[length]) {
            groupedByLength[length] = [];
        }
        groupedByLength[length].push(str);
    }

    // 가장 개수가 많은 그룹의 크기 반환
    const maxGroupSize = Math.max(...Object.values(groupedByLength).map(group => group.length));
    return maxGroupSize;
}