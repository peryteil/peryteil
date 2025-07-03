// 추상 클래스
abstract class Shape {
    abstract getArea(): number; // 반드시 자식 클래스에서 구현해야 함
}

// Rectangle 클래스
class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }

    getArea(): number {
        return this.width * this.height;
    }
}

// Circle 클래스
class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// 사용 예시
const shapes: Shape[] = [
    new Rectangle(10, 5),  // 가로 10, 세로 5
    new Circle(7)          // 반지름 7
];

for (const shape of shapes) {
    console.log("면적:", shape.getArea());
}
