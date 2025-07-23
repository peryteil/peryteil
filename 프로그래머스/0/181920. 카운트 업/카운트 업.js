function solution(start_num, end_num) {
    if (start_num > end_num) return [];
    return [start_num, ...solution(start_num + 1, end_num)];
}