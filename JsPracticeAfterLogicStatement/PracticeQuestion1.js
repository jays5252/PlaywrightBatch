const prompt = require("prompt-sync")();
let maxValue = 100;

let randomNumber = Math.floor(Math.random()*maxValue)+1;
console.log('Random Number: '+randomNumber);

let IsCorrect = false;
while(!IsCorrect)
{
    console.log('Random Number: '+randomNumber);
    let playerGuess = prompt(`Please enter value between 1 and ${maxValue}`);
    let playerInput = Number(playerGuess);
    if(playerInput ==randomNumber)
    {
        IsCorrect = true;
        console.log('Machine Number:'+randomNumber+' and your guess is: '+playerInput);
        console.log('Great both are same');
        break;
    }
    else if(playerInput>randomNumber)
    {
        console.log('Machine Number:'+randomNumber+' and your guess is: '+playerInput); 
        console.log('Your guessing: '+playerInput+' is gratter than: '+randomNumber);
        console.log('Please try again');
    }
    else if(playerInput<randomNumber)
    {
        console.log('Machine Number:'+randomNumber+' and your guess is: '+playerInput); 
        console.log('Your guessing '+playerInput+' is less than '+randomNumber);
        console.log('Please try again');
    }
    else{
        console.log('Invalid input')
    }

}
