// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Single parameter, no parentheses
const square = x => x * x;

// No parameters needs parentheses
const getTime = () => new Date();

// Traditional callbacks
array.map(function(item) {
    return item * 2;
});

// Arrow function callback
array.map(item => item * 2);

// Multiple operations
const process = data => data
    .filter(item => item > 0)
    .map(item => item * 2)
    .reduce((sum, item) => sum + item, 0);

// Event listener
button.addEventListener('click', 
    () => console.log('Clicked!'));