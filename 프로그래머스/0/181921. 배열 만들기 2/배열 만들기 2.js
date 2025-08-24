function solution(l, r) {
  const ans = [];
  if (l <= 0 && 0 <= r) ans.push(0); // 0도 유효

  const q = [5]; // 앞자리가 0인 수는 제외하고 5부터 생성
  while (q.length) {
    const x = q.shift();
    if (x > r) continue;
    if (x >= l) ans.push(x);

    const a = x * 10;     // 뒤에 0 붙이기
    const b = x * 10 + 5; // 뒤에 5 붙이기
    if (a <= r) q.push(a);
    if (b <= r) q.push(b);
  }

  return ans.length ? ans : [-1];
}