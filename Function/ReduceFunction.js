// array.reduce((accumulator, currentValue, index, array) => {
//     // Your logic here
//     return updatedAccumulator;
//   }, initialValue);

const numbers = [1, 2, 3, 4, 5];

// Summing all numbers
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15

// Creating an object from an array
const fruits = ['apple', 'banana', 'apple', 'orange'];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); // Output: { apple: 2, banana: 1, orange: 1 }
