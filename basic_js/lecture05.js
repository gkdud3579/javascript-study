var height=prompt("키를 입력해주세요");
console.log( height, typeof(height));
//프롬프트는 사용자로부터 받은 결과값이기 때문에 string.
//typeof(1)!=typeof("1")

var height_int = parseInt(height);
console.log(height_int, typeof(height_int));

var height_float = parseFloat(height);
console.log(height_float, typeof(height_float));

//NaN = Not a Number
//Infinity = 수학적으로 성립되지 않는 숫자적 오류