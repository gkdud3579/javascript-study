//접미사인지 확인하기

function solution(my_string, is_suffix) {
    if (my_string.endsWith(is_suffix)) {
        return 1;
    } else {
        return 0;
    }
}

//const solution = (str, suff) => str.endsWith(suff) ? 1 : 0