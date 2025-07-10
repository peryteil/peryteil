function solution(array) {
    const count = {};

    // 1. 각 숫자 등장 횟수 세기
    for (let num of array) {
        count[num] = (count[num] || 0) + 1;
    }

    // 2. 등장 횟수 중 최댓값 구하기
    const maxCount = Math.max(...Object.values(count));

    // 3. 최댓값을 가진 숫자들 찾기
    const modes = Object.keys(count).filter(key => count[key] === maxCount);

    // 4. 여러 개면 -1, 하나면 숫자로 반환
    return modes.length > 1 ? -1 : parseInt(modes[0]);
}

