// 1. Set up a date object (example: January 12, 2025)
let dateObj = new Date('2025-01-12T00:00:00');
console.log(`Current Date Object: ${dateObj}`);

// 2. Set up an array with all the named months of the year
const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
];

// 3. Get the day from the date object using getDate()
let day = dateObj.getDate();

// 4. Get the year from the date object using getFullYear()
let year = dateObj.getFullYear();

// 5. Get the month from the date object using getMonth()
let monthIndex = dateObj.getMonth(); // getMonth() returns 0-11

// 6. Set up a variable to hold the formatted date
let formattedDate = `${months[monthIndex]} ${day}, ${year}`;

// 7. Output the result into the console
console.log(`Current Date: ${formattedDate}`);
