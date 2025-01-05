// The break statement immediately terminates the loop and transfers control to the statement following the loop.
//  It's useful when you've found what you're looking for and don't need to continue iterating.
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);
  }
  
//The continue statement skips the rest of the current iteration and moves to the next one. It's helpful when you want to skip certain elements but continue the loop.

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
  }
  
  