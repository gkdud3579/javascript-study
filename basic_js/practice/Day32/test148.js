//각도기

function solution(angle) {
    if (angle > 0 && angle < 90) {
        // 예각
        return 1;
    } else if (angle === 90) {
        // 직각
        return 2;
    } else if (angle > 90 && angle < 180) {
        // 둔각
        return 3;
    } else if (angle === 180) {
        // 평각
        return 4;
    }
}