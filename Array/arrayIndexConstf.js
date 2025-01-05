//If we don't want to re-assigned another value to defined array then we need to user freeze function
const arr7 = ["black","Orange","pink",1,true];
Object.freeze(arr7);
arr7[0] = "red"; //not working
console.log(arr7);