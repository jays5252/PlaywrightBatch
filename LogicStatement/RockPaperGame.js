let Options = ["Rock","Paper","Scissors"];

let userSelection = Math.floor(Math.random()*3);

let computerSelection = Math.floor(Math.random()*3);

let playerSelection = Options[userSelection];
let computerInput = Options[computerSelection];

let message = "Player selected: "+playerSelection+", Computer selected: "+computerInput;

if(userSelection ===computerSelection)
{
    console.log(message+" :It's a tie");
}
else if(userSelection>computerSelection)
{
    console.log(message+" :player won")
}
else{
    console.log(message+" :Computer won")
}
