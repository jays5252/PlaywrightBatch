// array.find((element, index, array) => {
//     // Your condition here
//     return condition;
// });
const numbers = [10, 20, 30, 40, 50];
const result = numbers.find(num => num > 25);
console.log(result); // Output: 30

const products = [
    { name: 'Laptop', price: 999 },
    { name: 'Mouse', price: 25 },
    { name: 'Keyboard', price: 75 }
];

// Sort by price ascending
products.sort((a, b) => a.price - b.price);

// Sort by name
products.sort((a, b) => a.name.localeCompare(b.name));

