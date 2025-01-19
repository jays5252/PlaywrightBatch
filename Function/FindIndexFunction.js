// array.findIndex((element, index, array) => {
//     // Return true if element meets condition
//     // Return false otherwise
// });
// Finding the index of a specific number
const numbers = [10, 20, 30, 40, 50];
const index = numbers.findIndex(num => num === 30); // Returns 2

// Finding the first negative number
const mixed = [2, 4, -1, 5, -3];
const negativeIndex = mixed.findIndex(num => num < 0); // Returns 2

// Finding objects in an array
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];
const userIndex = users.findIndex(user => user.id === 2); // Returns 1

