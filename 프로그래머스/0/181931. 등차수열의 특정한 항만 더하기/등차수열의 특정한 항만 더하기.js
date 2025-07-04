function solution(a, d, included) {
    let sum = 0;
    for ( let i = 0; i < included.length; i++) {
        let trem = a + d * i;
        if ( included[i]){
            sum += trem;
        }
    }
    return sum;
}