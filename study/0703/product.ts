class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    display(): void {
        console.log(`제품명: ${this.name}, 가격: ${this.price}만원`);
    }
}

const product1 = new Product("MacBook", 150);
product1.display();