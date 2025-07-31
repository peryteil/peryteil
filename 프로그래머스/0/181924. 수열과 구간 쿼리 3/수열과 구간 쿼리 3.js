function solution(arr, queries) {
    const result = [...arr];
    for (const [i, j] of queries) {
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}
