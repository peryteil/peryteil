function solution(arr, queries) {
    const answer = [];
    
    for(const [s, e, k] of queries) {
        const candidates = arr
        .slice(s, e + 1)
        .filter(num => num > k)
        
        if (candidates.length === 0) {
            answer.push(-1);
        } else {
            answer.push(Math.min(...candidates));
        }
    }
    return answer;
}