// coco.ts
// 1장
var age = 5;
var name = "코코";
var isDog = true;
console.log(name, age, isDog);
function move(dir) {
    console.log("\uCF54\uCF54\uAC00 ".concat(dir, " \uBC29\uD5A5\uC73C\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4."));
}
move("up");
var id;
id = "abc";
id = 123;
// 3장
function handle(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
handle(123);
handle("hello");
var coco = {
    name: "코코",
    age: 3,
    bark: function () {
        console.log("멍멍!");
    },
};
coco.bark();
