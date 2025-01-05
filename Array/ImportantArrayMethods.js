let fabotiteFruits = ["grapefruit","orange","lemon"];
//push()->The push() method adds elements to the end of an array
fabotiteFruits.push("Apple");
console.log(fabotiteFruits)
//splice()->splice() method can add or remove elements at a specific index
let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(2, 0, "square", "trapezoid");
console.log(arrOfShapes);
//The first parameter (2) is the starting index, the second (0) is the number of elements to delete, and the rest are elements to insert

//concat()->concat() method combines arrays or adds values to an existing array
let arr1= [1,2,3,4]
let arr2= [5,6,7,8,9,0]
let arr3 = arr1.concat(arr2)
console.log(arr3);

//indexOf()-> method returns the index of a specified element

let array = [2,6,7,8,]
let findIndex1 = array.indexOf(6) //1
let findIndex2 = array.indexOf(19); 

console.log(findIndex1) //1
console.log(findIndex2) //-1

//lastIndexOf()-> method finds the last occurrence of a specified element
let animals = ["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog");
console.log(lastDog)