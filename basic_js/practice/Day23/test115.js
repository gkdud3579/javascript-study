//날짜비교하기


function solution(date1, date2) {
    return date1.join('') - date2.join('') < 0 ? 1 : 0;
}


// function solution(date1, date2) {
//     const dateString1 = date1.join("-");
//     const dateString2 = date2.join("-");
    
//     const dateObject1 = new Date(dateString1);
//     const dateObject2 = new Date(dateString2);

//     if (dateObject1 < dateObject2) {
//         return 1;
//     } else {
//         return 0;
//     }
// }