function solution(my_string) {
  const suffixes = [];

  for (let i = 0; i < my_string.length; i++) {
    suffixes.push(my_string.slice(i)); // i번째부터 끝까지 잘라서 추가
  }

  return suffixes.sort(); // 사전순 정렬 후 반환
}
