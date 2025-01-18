//Recursive functions are functions that call themselves. They're useful for tasks that can be broken down into smaller, similar sub-tasks. Here's a simple example calculating factorial:

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(10));