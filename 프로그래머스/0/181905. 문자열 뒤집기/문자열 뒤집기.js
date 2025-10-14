function solution(my_string, s, e) {
  // 문자열을 배열로 변환
  const arr = my_string.split('');
  
  // s부터 e까지의 부분 문자열을 잘라 뒤집음
  const reversed = arr.slice(s, e + 1).reverse();
  
  // 원래 배열에 뒤집은 부분을 다시 넣음
  arr.splice(s, e - s + 1, ...reversed);
  
  // 배열을 문자열로 합쳐 반환
  return arr.join('');
}
