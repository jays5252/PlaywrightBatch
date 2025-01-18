function someFunction(param1, ...param2) {
    console.log(param1, param2);
  }
  
  // Using the rest parameter with arrays
  function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  // With object methods
  const logger = {
    log(...messages) {
      messages.forEach(msg => console.log(msg));
    }
  };

  // Example calls
someFunction("hi", "there!", "How are you?");
// Logs: hi [ 'there!', 'How are you?' ]

sumAll(1, 2, 3, 4, 5);
// Returns: 15

logger.log("Error:", "Invalid input", "Please try again");
// Logs each message on a new line
