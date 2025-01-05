//Printing an specific value of array
let arr5 = ["black","Orange","pink",1,true];
console.log(arr5[0]);
console.log(arr5[4]);
console.log(typeof arr5[4]);

//re-assigning value on index 0
arr5[0] = "red";
console.log(arr5);

//re-assigning value on index 0, with const declearation
const arr6 = ["black","Orange","pink",1,true];
arr6[0] = "Blue";
console.log(arr6);