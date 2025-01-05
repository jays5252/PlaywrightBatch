//sort() method for arrays. By default, it sorts numbers from small to high and strings in alphabetical order (A-Z).
let names1 = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
let shortedArray1 = names1.sort();
console.log(shortedArray1) //[ 'Alicia', 'Bert', 'Fatiha', 'James', 'Maria' ]

let ages1 = [18, 72, 33, 56, 40];
let shortedAge1= ages1.sort();
console.log(shortedAge1);

//reverse() ->This method reverses the order of elements regardless of whether the array is sorted or not - the last element becomes first, and the first element becomes last.

let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
let reverseName = names.reverse();
console.log(reverseName) //[ 'Alicia', 'Bert', 'Fatiha', 'James', 'Maria' ]

let ages = [18, 72, 33, 56, 40];
let reverseAge= ages.reverse();
console.log(reverseAge);
