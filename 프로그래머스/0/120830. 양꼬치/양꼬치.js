function solution(n, k) {
  const freeDrinks = Math.floor(n / 10);  // 서비스 음료수 개수
  const payDrinks = k - freeDrinks;       // 실제 돈 낼 음료수 개수
  const total = n * 12000 + payDrinks * 2000;
  return total;
}
