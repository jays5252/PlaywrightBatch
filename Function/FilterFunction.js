// newArray = array.filter((element, index, array) => {
//     // Your code here
//     return true; // Include the element
//     return false; // Exclude the element


const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => num % 2 === 0); 
console.log(evenNumbers); // [2, 4]
