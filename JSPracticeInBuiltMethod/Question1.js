// Step 1: Create an array with duplicate names
const names = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike", "Laurence", "Mike", "Laurence", "Mike"];

// Step 2: Use filter() to create a new array with unique values
const uniqueNames = names.filter((value, index, array) => {
    // Step 3: Log the current index and value
    console.log(`Index: ${index}, Value: ${value}`);
    
    // Step 4: Return true only if the current index matches the first index of the value
    return array.indexOf(value) === index;
});

// Step 5: Output the unique array
console.log("Unique Names Array:", uniqueNames);