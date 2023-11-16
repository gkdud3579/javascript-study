//문자열 잘라서 정렬하기

function solution(myString) {
    var answer = [];
    var parts = myString.split("x");
    
    for (var i = 0; i < parts.length; i++) {
        if (parts[i] !== "") {
            answer.push(parts[i]);
        }
    }
    
    return answer.sort();
}

// const solution=s=>s.match(/[^x]+/g).sort()