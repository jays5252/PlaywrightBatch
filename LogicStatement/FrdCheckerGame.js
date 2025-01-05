const ps = require("prompt-sync")();

let name = ps("Please enter a name");
switch (name) {
    case "jay":
        console.log(name + " is a friend");
    case "karan":
        console.log(name + " is a friend");
    default:
        console.log("I don't know this person named " +name);
}
