// Question1: What data type is the variable in Example 1?
const c= '5';
console.log("Q1 :",typeof(c));
//Answer = String

//Question2: What data type is the variable in Example 2?
const c1 = 91;
console.log("Q2 :", typeof(c1));
//Answer = Number

//Question3:Which declaration is generally better in Example 3, line 1 or line 2?
let empty1 = undefined;  //line 1
let empty2 = null;      //line 2
//Answer: Line 2, because in case of null we declare value for valuable.

// Question4: What is the console output for Example 4?
let a = "Hello";
a = "world";
console.log("Q4 : "+a);
//Answer: world

//Question5:What will be logged to the console in Example 5?
let a1 = "world";
let b1 = `Hello ${a1}!`;
console.log("Q5 : "+b1);
//Answer:Hello world!

//Question6:What is the value of a in Example 6?
// let d = "Hello";
// d = prompt("world");
// console.log("Q6 : "+d);
//Answer: Error prompt is not defind

// Question7: What is the value of b output to the console in Example 7?
let nuMa = 5;
let nuMb = 70;
let nuMc = "5";
nuMb++;
console.log("Q7 : "+nuMb);
//Answer: 71

//Question8: What is the value of result in Example 8?
let result = 3 + 4 * 2 / 8;
console.log("Q8 : "+result);
//Answer: 4

//Question9: What are the values of total and total2 in Example 9?
let firstNum = 5;
let secondNum = 10;
firstNum++;
secondNum--;
let total = ++firstNum + secondNum;
console.log("Q9 Answer1 : "+total);
let total2 = 500 + 100 / 5 + total--;
console.log("Q9 Answer2 : "+total2);
//Ans1: 16, Ans2: 536

// Qusetion10:What is logged to the console in Example 10?
const a5 = 5;
const b = 10;
console.log("Q10 Ans1 :"+a5 > 0 && b > 0);
console.log("Q10 Ans2 :"+a5 == 5 && b == 4);
console.log("Q10 Ans3 :"+true || false);
console.log("Q10 Ans4 :"+a5 == 3 || b == 10);
console.log("Q10 Ans5 :"+a5 == 3 || b == 7);



