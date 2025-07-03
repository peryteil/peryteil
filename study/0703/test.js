function solution(array) {
    // 1. 배열을 오름차순으로 정렬
    array.sort((a, b) => a - b);

    // 2. 중앙 인덱스 계산
    const midIndex = Math.floor(array.length / 2);

    // 3. 중앙값 반환
    return array[midIndex];
}

let arr = [5, 2, 9, 1, 10];
arr.sort((a,b)=> a-b);
console.log(arr);

console.log(Math.floor(3.7))
console.log(Math.floor(2.1))
console.log(Math.floor(-1.2))