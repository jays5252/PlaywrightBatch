let val = "42";
console.log(typeof(val));
//string to number conversion
let modVal = Number(val);
console.log("modVal",typeof(modVal));

//String to Boolean conversion
let boolA = Boolean(val);
console.log(boolA);
console.log('boolA', typeof(boolA));
/*Boolean can be converted 1,0,true,false,NaN,""
1       -->true
0       -->false
Other than 0--->true
"1"     -->true
"0"     -->true
"true"   -->true
"false"  -->true
 -->Only an empty string, null and undefined will load load to boolean as false */
let strval = 'Jay';
let isInt = Number(strval);
console.log('isInt value :'+isInt);
console.log("isiInt", typeof(isInt));
//if charactir is being converted into number it returns NaN