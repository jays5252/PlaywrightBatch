// 1. Create a string that will hold a word value of your choice
const word = "scramble";

// 2. Create a function to scramble the word
function scrambleWord(input) {
    let original = input; // Original string
    let scrambled = ""; // Temporary scrambled word
    let length = original.length; // Original length of the string

    // 5. For loop iterates based on the length of the string
    for (let i = 0; i < length; i++) {
        // 6. Generate a random index
        let randomIndex = Math.floor(Math.random() * original.length);

        // 7. Add the selected character to the scrambled word
        scrambled += original[randomIndex];

        // 9. Remove the selected character from the original string
        original = original.slice(0, randomIndex) + original.slice(randomIndex + 1);

        // 8. Output the current state of the scramble
        console.log(`Original: ${input} | Scrambled: ${scrambled} | Remaining: ${original}`);
    }

    // 11. Return the final scrambled word
    return scrambled;
}

// 12. Invoke the function with the word and output the final result
const scrambledWord = scrambleWord(word);
console.log(`Final Scrambled Word: ${scrambledWord}`);
