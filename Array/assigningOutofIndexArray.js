cars = ["Toyota", "Renault", "Volkswagen"];
console.log(cars[0]); // Toyota
console.log(cars[1]); // Renault
console.log(cars[2]); // Volkswagen
// console.log(cars[3]); // undefined
// console.log(cars[-1]); // undefined
//Assigning values to non-existent indices creates new elements
cars[3] = 'Kia';
cars[-1] = 'Fiat';
console.log(cars);