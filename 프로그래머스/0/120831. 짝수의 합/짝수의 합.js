function solution(n) {
    const lastEven = n % 2 === 0 ? n : n - 1;
    const count = lastEven / 2;
    return count * (2 + lastEven) / 2;
}