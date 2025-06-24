// alert("Hellow World")
// console.log("Hello World");
// document.write("<h1>Document Write</h1>")

// let currentYear = 2025;
// let birthYear = prompt("태어난 해를 입력하세요.")
// let age = currentYear - birthYear + 1;
// alert("당신의 나이는 " + age + "살 입니다.")

// let name = "철수";
// let age = 18;
// let isStudent = true;

// console.log(typeof name); // string
// console.log(typeof age); // number
// console.log(typeof isStudent); // boolean

// let price = 10000;
// let rate = 0.2;
// let discount = price * rate;
// let finalPrice = price - discount;

// console.log("할인된 가격은 " + finalPrice + "원입니다.");

// let name = "영희";
// console.log(`안녕하세요, ${name}님!`);
// console.log("안녕하세요, " + name + "님");

// let a = 10;
// console.log(a);
// a += 5;
// console.log(a);
// a-= 3;
// console.log(a);
// a *= 2;
// console.log(a);
// a /= 4;
// console.log(a);
// console.log(`최종 값은 ${a} 입니다.`)

// 1. 이름과 나이를 입력받아 인사말 출력하기
// let name = "경현";
// let age = 35;

// alert(`안녕하세요. ${name}님의 나이는 ${age}세입니다.`)

// 2. 두 수를 입력받아 사칙연산 결과를 가각 출력하기.
// let a = 10;
// let b = 1;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);

// // 3. == vs === 비교 실험하기
// console.log(1 == "1");
// console.log(1 === "1");

// // 사용자에게 두 수를 입력받기
// let num1 = parseFloat(prompt("첫 번째 숫자를 입력하세요:"));
// let num2 = parseFloat(prompt("두 번째 숫자를 입력하세요:"));

// // 사칙연산 결과 계산
// let sum = num1+ num2;
// let diffrernce = num1 - num2;
// let product = num1 * num2;
// let quotient = num1 / num2;

// // 결과 출력
// console.log("덧셈: " + sum);
// console.log("뺄셈: " + difference);

// // 실습: 3의 배수 검사기
// let num = prompt("숫자를 입력하세요.");
// if (num % 3 === 0) {
//     alert("3의 배수입니다.");
// } else {
//     alert("3의 배수가 아닙니다.");
// }

// + - * / %

// if (num % 3 === 0) {
//     alert("3의 배수입니다.");
// } else if(num % 7 === 0) {
//     alert("7의 배수입니다.");
// } else {
//     alert("3의 배수가 아닙니다.");
// }

// let day = prompt("요일을 입력하세요.");
// switch (day) {
//     case "월요일":
//         alert("한 주의 시작!");
//         break;
//     case "금요일":
//         alert("불타는 금요일!");
//         break;
//     default:
//         alert("평범한 하루네요.");
// }

// 1. 숫자 두 개를 변수로 저장하고 더한 결과를 출력해보세요.
// let a = 5;
// let b = 3;
// alert(a+b);

// // 2. 이름과 나이를 저장하고 다음과 같은 문장을 출력해보세요. "홍길동님은 20살입니다."
// let name = "홍길동";
// let age = 20;
// alert(`${name}님은 ${age}살입니다.`);

// // 3. 정사각형의 한 변 길이를 변수로 저장하고 넓이를 출력해보세요.
// let side = 4;
// console.log(side * side);

// // 4. 숫자 하나가 짝수인지 홀수인지 출력해보세요.
// let num = parseInt(prompt("숫자를 입력하세요."));
// if(num % 2 === 0) {
//     alert("짝수 입니다.");
// }else{
//     alert("홀수 입니다.");
// }

// // 5. 나이에 따라 아래 문장을 출력해보세요.
// // 19세 미만: "미성년자입니다."
// // 19세 이상:"성인입니다."
// let age1 = 16;
// if(age1 < 19 ){
//     alert("미성년자입니다.")
// }else{
//     alert("성인입니다.")
// }

// //6. 비밀번호가 맞는지 확인하는 코드를 작성해보세요.
// let password = "1234";
// let input = prompt("비밀번호를 입력하세요.");
// if(password === input){
//     alert("로그인 성공");
// }else{
//     alert("로그인 실패");
// }

// 7. 1부터 10까지 숫자를 차례대로 출력해보세요.
// for(let i = 1; i <=10; i++){
//     console.log(i);
// }
// 8. 1부터 100까지 숫자 중에서 5의 배수만 출력해보세요.
// for(let i = 1; i<=100; i++){
//     if(i % 5 === 0){
//         console.log(i);
//     }
// }
// 9. 사용자가 입력한 숫자까지 1씩 증가하면서 출력해보세요.
// let input = prompt("숫자를 입력하세요:");
// let end = parseInt(input);

// for (let i = 1; i <= end; i++){
//     console.log(i);
// }
// 10. 구구단 2단을 출력해보세요.
for(let i = 2; i++){
    for(let j=1; j<=9; j++){
        console(`${i}단`)
    }
    console.log
}