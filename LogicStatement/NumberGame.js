const ps = require("prompt-sync")();

let enteredNumber = ps('Please enter a number');
num = Number(enteredNumber)
let dynamicNumber = Math.floor(Math.random()*5);
if(dynamicNumber>num)
{
    console.log("Entered number "+num+" is less than "+dynamicNumber)
}
else if(enteredNumber===num)
{
    console.log("Entered number "+num+" is equal to "+dynamicNumber)
}
else{
    console.log("Entered number "+num+" is gratter than "+dynamicNumber)
}