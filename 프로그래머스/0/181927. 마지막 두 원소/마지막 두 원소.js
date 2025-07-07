function solution(num_list) {
    const [a, b] = num_list.slice(-2);
    const newValue = b > a ? b - a : b * 2;
    return [...num_list, newValue]; // 새로운 배열로 리턴
    // 원본 배열을 수정하지 않고, 새로운 배열을 만드는 방식이에요. 함수형 스타일에 가까워서, 원본을 건드리지 않도록 하고 싶을 때 유용.
}