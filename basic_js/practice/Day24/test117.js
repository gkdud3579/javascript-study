//그림 확대

function solution(picture, k) {
    // 각 행에 대해 k배 확대
    const enlargedRows = picture.map(row => row.split('').map(pixel => pixel.repeat(k)).join(''));

    // 각 행을 k배 만큼 복사하여 k배 확대된 그림 생성
    const enlargedPicture = enlargedRows.flatMap(row => Array(k).fill(row));

    return enlargedPicture;
}