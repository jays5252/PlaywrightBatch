let globalVar = "I'm global";

function testScope() {
    console.log(globalVar); // Accessible
}

function testScope() {
    let localVar = "I'm local";
    console.log(localVar); // Accessible
}

console.log(localVar); // Error: localVar is not defined

