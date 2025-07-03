// function identity<T>(value: T) : T {
//     return value;
// }
// identity<string>("안녕");
// identity<number>(42);
// function printLength(value: string | number) {
//     if (typeof value === "string") {
//         console.log("길이:", value.length);
//     }else{
//         console.log("숫자 두 배:", value * 2);
//     }
// }
// type IsString<T> = T extends string ? "문자열" : " 문자열 아님";
// type A = IsString<string>;
// type B = IsString<number>;
// const user = {
//     profile: {
//         name: "Alice",
//     },
// };
// console.log(user.profile?.email?.length);
// const nickname = user.profile?.nickname ?? "이름 없음";
// interface ApiResponse<T> {
//     status: number;
//     message: string;
//     data: T;
// }
// const response: ApiResponse<{ name: string}>= {
//     status: 200,
//     message: "OK",
//     data: {name: "홍길동"},
// };
// function identity<T>(value: T): T {
//     return value;
// }
// function merge<T, U> (a:T, b: U): T & U {
//     return {...a, ...b };
// }
// const user = merge({name:"Alice"}, { age: 30});
// console.log(user);
// function wrapArray<T>(value: T): T[]{
//     return [value];
// }
// const result = wrapArray("hello");
// interface ApiResponse<T> {
//     status: number;
//     data: T;
// }
// const response: ApiResponse<string> = {
//     status: 200,
//     data: "성공",
// };
// function logLength< T extends { length: number }>(value: T){
//     console.log(value.length);
// }
// logLength("hello");
// logLength([1, 2, 3]);
// logLength({ length: 10})
// function getValue<K extends keyof T, T>(obj: T, key: K): T[K] {
//     return obj[key];
// }
// const user = { name: "Jane", age: 22};
// const result = getValue(user, "name");
var DataStore = /** @class */ (function () {
    function DataStore() {
        this.data = [];
    }
    DataStore.prototype.add = function (item) {
        this.data.push(item);
    };
    DataStore.prototype.getAll = function () {
        return this.data;
    };
    return DataStore;
}());
var store = new DataStore();
store.add(10);
store.add(20);
console.log(store.getAll());
