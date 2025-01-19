// 1. Create an end date
const endDate = "2025-01-01T00:00:00Z"; // Set the target countdown date

// 2. Countdown function to calculate remaining time
function calculateCountdown(endDate) {
    const totalMilliseconds = Date.parse(endDate) - Date.now(); // Get remaining milliseconds

    // 3. Calculate days, hours, minutes, and seconds
    const days = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((totalMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((totalMilliseconds % (1000 * 60)) / 1000);

    // 4. Return values as an object
    return { days, hours, minutes, seconds };
}

// 5. Function to run update() every second
function startCountdown() {
    function update() {
        // Get the countdown values
        const countdown = calculateCountdown(endDate);

        // Create an output string
        let output = "";

        // 6. Iterate through the object to build the output string
        for (const [unit, value] of Object.entries(countdown)) {
            output += `${unit}: ${value} `;
        }

        // 7. Output the result to the console
        console.log(output);

        // Check if the countdown has ended
        if (countdown.days <= 0 && countdown.hours <= 0 && countdown.minutes <= 0 && countdown.seconds <= 0) {
            clearInterval(intervalId); // Stop the timer when it reaches zero
            console.log("Countdown complete!");
        }
    }

    // Call update every second
    const intervalId = setInterval(update, 1000);
}

// Start the countdown
startCountdown();


///Incorrect Output in result
//Pending