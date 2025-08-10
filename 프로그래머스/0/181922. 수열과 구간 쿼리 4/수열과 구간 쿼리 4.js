function solution(arr, queries) {
  for (let [s, e, k] of queries) {
    for (let i = s; i <= e; i++) {
      if (i % k === 0) {
        arr[i] += 1;
      }
    }
  }
  return arr;
}

// 예시 실행
console.log(solution([0, 1, 2, 4, 3], [[0, 4, 1], [0, 3, 2]]));
// 출력: [2, 2, 4, 5, 4]