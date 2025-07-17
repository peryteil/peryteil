function solution(num_list) {
    const reversed = [];
    
    for (let i = num_list.length -1; i >= 0; i--) {
        reversed.push(num_list[i]);
    }
    return reversed;
}