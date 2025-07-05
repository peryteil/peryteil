function solution(num_list) {
    let oddStr = "";   // 홀수 문자열
    let evenStr = "";  // 짝수 문자열

    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            evenStr += num_list[i];  // 짝수면 evenStr에 추가
        } else {
            oddStr += num_list[i];   // 홀수면 oddStr에 추가
        }
    }

    // 문자열을 숫자로 바꿔서 더함
    return Number(oddStr) + Number(evenStr);
}

