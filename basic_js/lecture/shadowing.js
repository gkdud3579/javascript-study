function shadowing_example(){
    var val = 5 ;
    console.log("F", val);
    val++;
}

var val = 0;
shadowing_example();
console.log("0", val);



// function name
// 한 함수 안에서만 값이 유지되는 변수
// var in_function_var;
// }

// 여러 함수에서 값이 유지되면서 사용되는 변수
// 사용되는 변수
// var out_function_var;