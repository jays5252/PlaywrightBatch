// Step 1: Set the start variable
let start = 10;

// Step 2: Create the countdown function
function countdown(value) {
    // Step 3: Output the current value to the console
    console.log("Countdown value:", value);

    // Step 4: Check if the value is less than 1; end the loop if true
    if (value < 1) {
        console.log("Countdown complete!");
        return;
    }

    // Step 5-6: Call the function within itself, decrementing the value
    countdown(value - 1);
}

// Step 7-8: Create a second countdown function
function countdownAlt(value) {
    console.log("Alternative Countdown value:", value);

    // Step 8: Continue the loop if the value is greater than 0
    if (value > 0) {
        return countdownAlt(value - 1); // Decrement and invoke recursively
    }

    // Step 9: Ensure the loop ends when the condition is no longer true
    console.log("Alternative Countdown complete!");
}

// Invoke the first countdown function
countdown(start);

// Invoke the second countdown function
countdownAlt(start);
