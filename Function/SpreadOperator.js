let spread = ["so", "much", "fun"];
let message = ["JavaScript", "is", ...spread, "and", "very", "powerful"];


const basicInfo = { name: 'John', age: 30 };
const details = { 
  ...basicInfo,
  city: 'New York',
  occupation: 'Developer'
};

const numbers = [1, 2, 3, 4, 5];
Math.max(...numbers); // Returns 5
console.log(...numbers); // Prints: 1 2 3 4 5
