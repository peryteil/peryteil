function solution(code) {
    let ret = ""; // 최종 결과를 담을 문자열 변수.(빈 문자열로 시작)
    let mode = 0; // mode 는 0 또는 1로 바뀌며, 문자열을 어떻게 처리할지 결정하는 상태.

    for (let i = 0; i< code.length; i++) {
        if(code[i] === "1") {
            mode = mode === 0 ? 1 : 0; // 1을 만나면 mode 전환
        }else{
            if((mode === 0 && i % 2 === 0 ) || (mode === 1 && i % 2 === 1)) {
                ret += code[i];
            }
        }
    }

    return ret === ""? "EMPTY" : ret;
}