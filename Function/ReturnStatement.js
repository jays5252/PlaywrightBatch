function multiply(a, b) {
    return a * b;
}

let result = multiply(4, 5);
console.log(result); // Outputs: 20

function isPositive(number) {
    if (number <= 0) {
        return false;
    }
    return true;
}

isPositive(-5)