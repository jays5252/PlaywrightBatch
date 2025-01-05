// do {
//     // code to be executed
//   } while (condition);
let prompt = require('prompt-sync')();

let number;
do {
    number = prompt("Please enter a number between 0 to 100")
}
while(!(number >= 0 && number < 100));