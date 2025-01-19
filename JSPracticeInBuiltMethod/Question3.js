// Step 1: Create a string with mixed case
const phrase = "jAvascript is AWeSome and eAsy To LeArn";

// Step 2: Create a function to manipulate the string
function capitalizeWords(inputString) {
    // Step 3: Convert the entire string to lowercase
    const lowerCaseString = inputString.toLowerCase();
    
    // Step 4: Create an empty array for the capitalized words
    const capitalizedWords = [];
    
    // Step 5: Split the string into an array of words
    const wordsArray = lowerCaseString.split(" ");
    
    // Step 6: Loop through each word
    for (let word of wordsArray) {
        // Step 7: Capitalize the first letter and add the rest of the word
        const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        
        // Step 8: Add the capitalized word to the array
        capitalizedWords.push(capitalizedWord);
    }
    
    // Step 9: Join the words back into a single string
    const result = capitalizedWords.join(" ");
    
    // Step 10: Return the updated string
    return result;
}

// Call the function and output the result
const result = capitalizeWords(phrase);
console.log("Capitalized Phrase:", result);
