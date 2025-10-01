function solution(n) {
  const sequence = [n]; // 시작값 저장
  
  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;      // 짝수
    } else {
      n = 3 * n + 1;  // 홀수
    }
    sequence.push(n); // 계산된 값 추가
  }
  
  return sequence;
}
