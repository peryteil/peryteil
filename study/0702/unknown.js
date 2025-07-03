var value2 = 10; // 동적 타입
value2 = "hello"; // OK
console.log(value2);
value2 = new Array(); // [], Array(), new Array(), new Array(10)
if (value2 instanceof Array) {
    value2.push(33);
}
console.log(value2);
