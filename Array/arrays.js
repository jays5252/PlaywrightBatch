



//concatination of array
let alph = ["abc","xyz"]
let concatArr = alph.concat(alph).concat("aa","ab")
console.log(concatArr);
//finding an element in array
let findval = concatArr.find(
function(i)
{
    return i==='abc';
}
)
console.log(findval);

 