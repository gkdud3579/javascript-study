//배열 만들기 6

function solution(arr) {
    var answer = [];
    var stk = []; 
    var i = 0;
    
    while(i < arr.length){
        if(stk.length === 0){
            stk.push(arr[i]);
            i++;
        }
        else if(stk.length > 0 && stk[stk.length - 1] === arr[i]){
            stk.pop();
            i++;
        }
        else if(stk.length > 0 && stk[stk.length - 1] !== arr[i]){
            stk.push(arr[i]);
            i++;
        }
        else
            return [-1];
    }
    return stk.length > 0 ? stk : [-1]; ;
}