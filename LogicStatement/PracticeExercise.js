//●	Practice Exercise
const prompts = require('prompt-sync')();

let prize = prompts("Please Enter value between 0 to 10");
let prize1 = Number(prize);
let message = 'My Selection ';
let awardedPrize = "";
switch (prize1) {
    case 1:
        awardedPrize = "1st prize";
        break;
    case 2:
        awardedPrize = "2nd prize";
        break;
    case 3:
        awardedPrize = "3rd prize";
        break;
    case 4:
        awardedPrize = "4th prize";
        break;
    case 5:
        awardedPrize= "5th prize";
    case 6:
        awardedPrize = "6th prize";
    case 7:
        awardedPrize = "7th prize";
    case 8:
        awardedPrize = "8th prize";
    case 9:
        awardedPrize = "9th prize";
    default:
        awardedPrize="Sorry there is no prize available for this value";
}
console.log(message+prize1+"--You got "+awardedPrize)