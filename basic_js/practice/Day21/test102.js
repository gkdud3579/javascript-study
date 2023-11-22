//전국 대회 선발 고사


function solution(rank, attendance) {
    const highRanker = [];
    
    for (let i = 0; i < rank.length; i++) {
        if (attendance[i]) {
            highRanker.push({ rank: rank[i], index: i });
        }
    }
    
    highRanker.sort((a, b) => a.rank - b.rank);

    const result = highRanker.slice(0, 3)
        .reduce((acc, student) => acc * 100 + student.index, 0);

    return result;
}
