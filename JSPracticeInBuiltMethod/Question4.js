// Input string
let input = "I love JavaScript";

// Step 1: Convert the string to lowercase
let str = input.toLowerCase();

// Step 2: Create an array of vowels
let vowels = ['a', 'e', 'i', 'o', 'u'];

// Step 3: Loop through the vowels array
vowels.forEach((vowel, index) => {
    console.log(`Replacing vowel: ${vowel} with: ${index}`);
    // Step 4: Replace all occurrences of the current vowel with its index
    str = str.replaceAll(vowel, index);
});

// Step 5: Output the resulting string
console.log(`Resulting string: ${str}`);
