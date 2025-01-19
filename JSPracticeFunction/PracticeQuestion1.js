// Define the recursive factorial function
function factorial(n) {
    console.log("Current value of n:", n); // Log the current value of the argument
    if (n === 0) {
        return 1; // Base case: if n is 0, return 1
    }
    return n * factorial(n - 1); // Recursive case: n * factorial(n - 1)
}

// Invoke the function with a number
let inputNumber = 5; // Change this number to observe different results
let result = factorial(inputNumber);

// Print the result
console.log(`Factorial of ${inputNumber} is: ${result}`);
