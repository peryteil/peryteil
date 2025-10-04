function solution(a, b, c, d) {
  const dice = [a, b, c, d];
  const counts = {}; // 주사위 눈의 등장 횟수 기록

  // 등장 횟수 세기
  for (const num of dice) {
    counts[num] = (counts[num] || 0) + 1;
  }

  const values = Object.keys(counts).map(Number);
  const freq = Object.values(counts);

  // 1️⃣ 네 주사위 모두 같은 경우
  if (values.length === 1) {
    const p = values[0];
    return 1111 * p;
  }

  // 2️⃣ 세 주사위가 같고 하나만 다른 경우
  if (freq.includes(3)) {
    const p = values.find(v => counts[v] === 3);
    const q = values.find(v => counts[v] === 1);
    return Math.pow(10 * p + q, 2);
  }

  // 3️⃣ 두 개씩 같은 경우 (2, 2)
  if (values.length === 2 && freq[0] === 2 && freq[1] === 2) {
    const [p, q] = values;
    return (p + q) * Math.abs(p - q);
  }

  // 4️⃣ 한 쌍만 같은 경우 (2, 1, 1)
  if (freq.includes(2)) {
    const p = values.find(v => counts[v] === 2);
    const [q, r] = values.filter(v => v !== p);
    return q * r;
  }

  // 5️⃣ 모두 다른 경우 (1, 1, 1, 1)
  return Math.min(...values);
}
