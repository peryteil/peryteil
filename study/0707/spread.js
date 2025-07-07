// // 스프레드 연산자, 구조분해

// const user = {id: 1, name: "Kim", age: 20, address:" Seoul"};
// const updated = {id: 2, ...user, name:"Lee", age: 21};

// console.log(updated);

// const userArr = [ 1, 2, 3, 4, 5];
// const updatedArr = [1, 2, ...userArr, 6, 7];

// console.log(updatedArr);

// // 구조 분해
// const userSplit = { id : 1, name: "Kim", age: 20, address: "Seoul"};
// // const { id, name, age, address } = userSplit;

// // console.log(id, name, age, address);

// const { id, name, ...rest} = userSplit; // 속성 넘길때 많이 사용
// console.log(id, name, rest);

// // 1. 구조 분해 할당을 이용해 다음 객체에서 `title`과 `author`를 추출해보세요.

// const book = { title: "The Great Gatsby", author: "F. Scout"};
// const { title, author } = book;
// const { title:title2, author:author2 } = book;

// console.log(title2);
// console.log(author);

// // 연습문제1: Map과 Set 활용하기
// // 문제 1~5 숫자가 포함된 배열[1, 2, 2, 3, 4, 5 ,5]에서 중복을 제거한 후, 모든 숫자에 5를 더한 값을 순서대로 출력하세요. 그리고 "total" 이라는 키에 중복을 제거한 숫자들의 합을 저장한 Map 을 만들어 출력하세요.
// const arr = [1, 2, 2, 3, 4, 5, 5];
// // 중복을 제거
// // const unique = [...new Set(arr)];
// const set = new Set(arr);
// // 모든 숫자에 5를 더한 값
// // const plusFive = unique.map(n => n + 5);
// // console.log("5를 더한 값들:", plusFive);
// // let i = 0;
// // for (let num of set) {
// //     console.log(Number(num) + 5);
// //     i = i + Number
// // }
// // "total"이라는 키에 중복을 제거한 숫자들의 합 // Map을 만듬
// // const sum = unique.reduce((acc, cur) => acc + cur, 0);
// const map = new Map();
// map.set("total", 
//     set.reduce((acc, cur)=> acc + Number))

// const resultMap = new Map();
// resultMap.set("total", sum);

// console.log("Map 결과:", resultMap);
// console.log("tital 값:", resultMap.get("total"));

// // 문제 2번
// const numbers= [3, 4, 7, 8, 10, 13];
// const evens = numbers.filter(num => num % 2 === 0);
// const squared = evens.map((num)=>num * num);
// const sum = squared.reduce((acc, cur) => acc + cur);
// console.log(sum);

// 문제 3번
function fetchData() {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve("data OK!");
        },2000);
    });
}
async function loadData() {
    const data = await fetchData();
    console.log(data);
}
loadData();