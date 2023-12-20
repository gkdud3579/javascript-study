//직각삼각형 출력하기

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    // 입력받은 높이를 정수로 변환
    const height = parseInt(line);

    // 입력받은 높이만큼 별표(*)를 출력하여 삼각형을 그립니다.
    for (let i = 1; i <= height; i++) {
        console.log('*'.repeat(i));
    }

    // readline 인터페이스 종료
    rl.close();
}).on('close', function () {
    process.exit(0);
});
