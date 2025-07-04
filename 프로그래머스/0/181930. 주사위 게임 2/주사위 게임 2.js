function solution(a, b, c) {
  let result = a + b + c;  // 기본 점수: 세 수의 합

  if (a === b && b === c) {
    // 세 숫자가 모두 같을 때
    result *= (a * a + b * b + c * c);       // 제곱합 곱하기
    result *= (a * a * a + b * b * b + c * c * c); // 세제곱합 곱하기
  } else if (a === b || b === c || a === c) {
    // 두 숫자만 같을 때
    result *= (a * a + b * b + c * c); // 제곱합 곱하기
  }

  // 세 숫자가 모두 다르면 그냥 result 그대로
  return result;
}
