function solution(arr, queries) {
    var answer = [];
    for(const query of queries){
        const i = query[0];
        const j = query[1];
        
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        
        answer = arr;
    }
    return answer;
}