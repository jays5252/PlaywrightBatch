let str = "Hello";
//String
let nr = 7;
//Numder
let bigNr = 12345678901234n;
let bool = true;
//Boolen
let sym = Symbol("unique");
//Symbl
let undef = undefined;
//undefined
let unknown = null;
//null
//While declearing variable we don't need to declear it's datatypes, it's fatch type using it's values.
console.log('str', typeof str);
console.log('nr', typeof nr);
console.log('bigNr', typeof bigNr);
console.log('bool', typeof bool);
console.log('sym', typeof sym);
console.log('undef', typeof undef);
console.log('unknown', typeof unknown);


// Number  --> 2^53-1 to -2^53-1

// 2^53-1 ==> 90071992547409920

// c# --> sort int, in16, int32, bigInt, double...

let num = 9007199254740991n
console.log(num, typeof num);

let num1 = num + 1000n;
console.log(num1, typeof (num1));
let a;
//if value is not assigned to a valueable then it will be undefined 
console.log('a', typeof a);
