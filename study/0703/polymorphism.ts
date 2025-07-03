class Animal{
    sound(): void {
        console.log("동물이")
    }
}
class Dog extends Animal {
    sound(): void {
        console.log("멍멍!");
    }
}

class Cat extends Animal {
    sound(): void{
        console.log("야옹!");
    }
}

const animals: Animal[] = [new Dog(), new Cat()];

for (const animal of animals) {
    animal.sound();
}