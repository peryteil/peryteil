export class Animal {
    sound(): void {
        console.log("동물이 소리를 냅니다.");
    }
}
class Dog extends Animal {
    sound(): void {
        console.log("멍멍!");
    }
}

class Cat extends Animal {
    sound(): void {
        console.log("야옹!");
    }
}

const dog = new Dog();
const cat = new Cat();

dog.sound();
cat.sound();