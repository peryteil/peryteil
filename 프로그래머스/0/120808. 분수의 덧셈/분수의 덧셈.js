function solution(numer1, denom1, numer2, denom2){
    // 분모 같게 만들기
    const top = numer1 * denom2 + numer2 * denom1; // 분자
    const bottom = denom1 * denom2;
    
    // 최대공약수 구하기
    const gcd = getGCD(top, bottom);

    // 기약분수로 만들어서 배열로 반환
    return [top / gcd, bottom / gcd];
}

// 최대공약수 구하는 함수 (외워두면 좋아요!)
function getGCD(a, b) {
    return b === 0 ? a : getGCD(b, a % b);
}

