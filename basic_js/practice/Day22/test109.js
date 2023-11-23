//배열의 원소 삭제하기


function solution(arr, delete_list) {
    var answer = [];
    for(var i = 0; i < arr.length; i++){
        if(!delete_list.includes(arr[i]))
            answer.push(arr[i]);
    }
    return answer;
}


// function solution(arr, delete_list) {
//     return arr.filter((n) => !delete_list.includes(n));
// }