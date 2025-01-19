//Step 1: Create an Array of Numbers
const numbers = [1, 2, 3, 4, 5];

 //Step 2: Use map() with an Anonymous Function

 const doubledNumbers = numbers.map(function(number) {
    return number * 2;
});

console.log("Using anonymous function:", doubledNumbers);

//Step3: const doubledNumbersArrow = numbers.map(number => number * 2);
const doubledNumbersArrow = numbers.map(number => number * 2);

//Step4:Log the result onto the console

console.log("Using arrow function:", doubledNumbersArrow);

var Fun = function(number) {
    return number * 2;
}
const doubledNumbers1 = numbers.map(Fun);
console.log(doubledNumbers1);
