
let multiplicationTable = []; // step1

let tableSize = 5; // step 2
//step 3
for (let row = 1; row <= tableSize; row++) {
    let tempRowArray = [];

    //step 4
    for (let col = 1; col <= tableSize; col++) {
        tempRowArray.push(row * col);
    }

    // step 5
    multiplicationTable.push(tempRowArray);
}
console.log(multiplicationTable);
//multiplicationTable.forEach(row => console.log(row.join("\t")));
