function addToCart(productName = "Banana") {
    console.log("Added to cart: " + productName)
}

addToCart();
addToCart("Robot");
addToCart(73);

let sayHi = function() {
    console.log("Hi, Yes I'm");
}
sayHi();

let sayHey = function() {
    console.log("Hey!!!");
}
sayHey();

function addToCart2(productName, quantity, unitPrice) {

}

let product1 = {
    productName: "Bluetooth Headphone",
    quantity: 10,
    unitPrice: 299
}

addToCart2();

function addToCart3(product) {
    console.log("Product: " + product.productName);
    console.log("Quantity: " + product.quantity);
    console.log("Unit Price: " + product.unitPrice);
}

addToCart3(product1);

let product2 = {
    productName: "Bluetooth Headphone",
    quantity: 10,
    unitPrice: 299
}
let product3 = {
    productName: "Mellon",
    quantity: 3,
    unitPrice: 1
}

// Value & Referance(obje) Type

product2 = product3;
product2.productName = "Watermellon";
console.log(product3.productName);

let number1 = 14;
let number2 = 30;
number1 = number2;
number2 = 77;
console.log(number1);


function addToCart4(x) {
    console.log(products)
}

let products = [
    { productName: "Mellon", quantity: 3, unitPrice: 3 },
    { productName: "Lemon", quantity: 10, unitPrice: 1.75 },
    { productName: "Apricot", quantity: 10, unitPrice: 30 }
];

addToCart4(products);


function sum(...numbers) { // rest
    let total = 0;
    for (let index = 0; index < numbers.length; index++) {
        total = total + numbers[index];
    }
    console.log(total);
}

sum(42, 78);
sum(20, 30, 40, 99);

let numbers = [20, 70, 87, 43, 17];
console.log(numbers);
console.log(...numbers);
console.log(Math.max(...numbers));


let [moviesNBC1, moviesNBC2, moviesNBC3, players] = [
    { name: "Once Upon A Time İn Anatolia", views: "30M" },
    { name: "The Wild Pear Tree", views: "45M" },
    { name: "Winter Sleep", views: "23M" },
    [
        ["Taner Birsel", "Ahmet Mumtaz Taylan"],
        ["Dogu Demirkol", "Akın Aksu"],
        ["Demet Akbag", "Nejat Isler"]
    ]
];

console.log(moviesNBC1.name);
console.log(moviesNBC2);
console.log(moviesNBC3);
console.log(players);