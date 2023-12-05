//커피심부름


function solution(order) {
    var answer = 0;
    for (var i = 0; i < order.length; i++) {
        var price = 0;
        if (order[i].includes('anything')) {
            // "anything"인 경우 무조건 차가운 아메리카노의 가격 사용
            price = 4500;
        } else {
            // 그 외의 경우는 정해진 가격 사용
            price = order[i].includes('cafelatte') ? 5000 : 4500;
        }
        answer += price;
    }
    return answer;
}


// const solution = (order) => order.reduce((acc, cur) => acc + (cur.includes('latte') ? 5000 : 4500), 0)