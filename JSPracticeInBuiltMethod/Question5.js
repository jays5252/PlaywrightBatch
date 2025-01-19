// 1. Output the value of PI
console.log(`Value of PI: ${Math.PI}`);

// 2. Using Math to get ceil, floor, and round values of 5.7
let num = 5.7;
console.log(`Ceil of ${num}: ${Math.ceil(num)}`);
console.log(`Floor of ${num}: ${Math.floor(num)}`);
console.log(`Round of ${num}: ${Math.round(num)}`);

// 3. Output a random value
console.log(`Random value: ${Math.random()}`);

// 4. Use Math.floor() and Math.random() to get a number from 0 to 10
console.log(`Random number from 0 to 10: ${Math.floor(Math.random() * 11)}`);

// 5. Use Math.floor() and Math.random() to get a number from 1 to 10
console.log(`Random number from 1 to 10: ${Math.floor(Math.random() * 10) + 1}`);

// 6. Use Math.floor() and Math.random() to get a number from 1 to 100
console.log(`Random number from 1 to 100: ${Math.floor(Math.random() * 100) + 1}`);

// 7. Create a function to generate a random number using min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Run the function 100 times to generate random numbers from 1 to 100
for (let i = 0; i < 100; i++) {
    console.log(getRandomNumber(1, 100));
}
