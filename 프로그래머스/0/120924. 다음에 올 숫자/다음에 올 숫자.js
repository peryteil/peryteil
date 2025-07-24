function solution(common){
    const [a, b, c]= common;
    return (b - a === c - b )
    ? common.at(-1) + (b - a)
    : common.at(-1) * (b / a);
}