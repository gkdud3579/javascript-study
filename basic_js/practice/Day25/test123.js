//정사각형 만들기

function solution(arr) {
    const rowLen = arr.length
    const colLen = arr[0].length
    
    if(rowLen > colLen) {
        const gab = Array(rowLen-colLen).fill(0)
        return arr.map(a => [...a, ...gab])
    } 
    
    if(colLen > rowLen) {
        for(let i = 0 ; i < colLen-rowLen ; i ++) {
            const gab = Array(colLen).fill(0)
            arr.push(gab)
        }
    }
    
    return arr
}

// function solution(arr) {
//     let n = Math.max(arr.length, Math.max(...arr.map(v=>v.length)));
//     for (let a of arr) while (a.length<n) a.push(0);
//     while (arr.length < n) arr.push(Array(n).fill(0));
//     return arr;
// }