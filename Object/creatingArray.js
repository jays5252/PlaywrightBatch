let employee = {
    empId : 1164,
    fName : 'Jay',
    lNane : 'Singh',
    Gender : "Male"
}

//way to find proprty
let id = employee.empId
let firstName =employee["fName"]
console.log(id);
console.log(firstName);

//updating Value

let newID = employee.empId = 111;
let NewName = employee["fName"] = "Manu"
console.log(newID)
console.log(NewName)