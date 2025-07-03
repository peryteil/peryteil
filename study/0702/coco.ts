// coco.ts

// 1장
let age: number = 5;
let myName: string = "코코";
let isDog: boolean = true;

console.log(myName, age, isDog);

// 2장
type Direction = "left" | "right" | "up" | "down";

function move(dir: Direction) {
    console.log(`코코가 ${dir} 방향으로 이동합니다.`);
}

move("up");

let id: string | number;
id = "abc";
id = 123;

// 3장
function handle(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}

handle(123);
handle("hello");

// 4장
interface Dog {
    name: string;
    age: number;
    bark(): void;
}

// const coco: Dog = {
//     name: "코코",
//     age: 3,
//     bark() {
//         console.log("멍멍!");
//     },
// };

// coco.bark();

// class Dog {
//     constructor(public name: string, public age: number) {}

//     bark() {
//         console.log(`${this.name}가 멍멍 짖습니다.`);
//     }
// }

// const coco = new Dog("코코", 3);
// coco.bark();
// "나는 이제 진짜 객체가 됐어!"

// 5장: 제네릭의 마법- 어떤 것도 담을 수 있어!
// 길을 걷던 코코는 상자(Box)를 발견했어.
// 타입스크립트가 말했어.
// "이 상자는 무엇이든 담을 수 있어."
class Box<T> {
    content: T;
    constructor(content: T){
        this.content = content;
    }
}

const stringBox = new Box("사과");
const numberBox = new Box(123);
// "상자 안에 사과도 넣고, 숫자도 넣고, 다 가능해!"
// 6장: 비동기의 강-약속(Promise)
// 코코는 비동기의 강을 건너야 했어.
// 타입스크립트는 약속했지.
// "내가 데이터를 가져올 테니 기다려 줘!"

async function fetchData(): Promise<string>{
    return "데이터가 도착했습니다.";
}

fetchData().then((result) => {
    console.log(result);
});
// "오! 기다렸다가 결과를 받을 수 있구나!"

// 7장: 고급 타입-변신과 조합의 기술
// 타입스크립트는 마지막 마법을 알려줬어.
// "너는 이제 속성을 자유롭게 바꿀 수 있다."
interface Dog {
  name: string;
  age: number;
  bark(): void; // 필수 메서드
}

const readonlyDog: Readonly<Dog> = {
  name: "코코",
  age: 3,
  bark() {
    console.log("멍멍!");
  },
};// 수정 불가
// "속성을 뺄 수도, 선택적으로 바꿀 수도 있어!"
// 그리고 변신의 기술도 썼지.

type Result = "success" | "fail";

function handleResponse(res: Result) {
  if (res === "success") {
    console.log("성공했습니다!");
  } else {
    console.log("실패했습니다.");
  }
}

handleResponse("success");

// 8장: 코코의 결론
// 코코는 외쳤어.
// "타입스크립트는 마법 같아!
// 타입으로 안전하게, 클래스와 제네릭으로 구조화해서,
// 비동기와 조건 분기로 흐름까지 자유자재로 만들 수 있어!"
// 이제 나는 버그 없는 멋진 개발자가 될 거야!"
// 이 이야기의 결론
// 타입스크립트는
// "데이터를 설명하는 언어"
// "버그를 막고 안전한 코드 작성을 도와주는 도구"
// "객체지향 + 함수형 + 안정성 + 생산성" 모두 챙긴 언어

