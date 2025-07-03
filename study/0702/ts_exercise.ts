// // 1. 타입에 맞는 값만 허용
// function printAge(age: number){
//     if ( typeof age !== "number") {
//         throw new Error("숫자만 허용됩니다.");
//     }
//     console.log(`${age}살`);
// }

// printAge(20);

// // 2. 커스텀 타입 검사 함수 만들기
// type UserInput = string | number;
// function isString(input: UserInput):input is string {
//     return typeof input === "string";
// }

// // 3. 반환 타입 유효성 검사
// function getStatus(code: number): "success" | "error" {
//     if(code === 200) return "success";
//     return"error";
// }

// // 4. 매개변수가 string일 때만 길이 출력하는 함수
// function showLength( input: string |number) {
//     if (typeof input === "string"){
//         console.log(`길이: ${input.length}`);
//     }else{
//         console.log("문자열이 아닙니다.");
//     }
// }

// 문제 1. 문자열 변수 선언
// 설명: 이름을 저장하는 name 이라는 변수를 선언하고, 타입을 지정하세요. 값은 " Alice"로 지정하세요.
function main(){
let name: string = "Alice";
console.log(name);
}
main();

// 문제 2. 숫자와 boolean 타입
// 설명: 나이를 나타내는 age 변수는 숫자 타입
// 학생 여부를 나타내는 isStudent 는 boolean 타입 타입을 지정하고 값을 각각 21,true로 설정하세요.
let age: number = 21;
let isStudent: boolean = true;

console.log("나이:", age);
console.log("학생 여부:", isStudent);

// 문제 3. 함수 매개변수와 반환 타입
// 설명: 두 숫자를 받아서 더한 값을 반환하는 함수 add 를 작성하세요. 매개변수와 반환값에 모두 타입을 지정하세요.

function add(a: number, b: number):number{
    return a + b;
}
console.log(add(3, 5));
console.log(add(10, 20));