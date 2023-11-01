function solution(arr) {
    var stk = [];
    
    for (var i = 0; i < arr.length; i++) {
        if (stk.length === 0 || stk[stk.length - 1] < arr[i]) {
            stk.push(arr[i]);
        }
        else {
            while (stk.length > 0 && stk[stk.length - 1] >= arr[i]) {
                stk.pop();
            }
            stk.push(arr[i]);
        }
    }
    
    return stk;
}
