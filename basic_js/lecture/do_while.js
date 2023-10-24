var cond=false;

while(cond){
    console.log("이 구문은 실행되지 않습니다.");
}

do{
    console.log("이 구문은 한번은 실행됩니다.");
}while(cond);
//반복문을 일단 한번 실행 후, 조건식 보고 결정
//활용예시 : 퀴즈프로그램

do{
    var ans = parseInt(prompt("1+1=?"));
}while(ans != 2);

console.log("맞췄습니다.");