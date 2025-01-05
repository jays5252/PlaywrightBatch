const people = {
    friends: ['Test']
}
let frd1 = {
    fName: 'Jay',
    lName: 'Kuar',
    ID: '123'
}
let frd2 = {
    fName: 'Manu',
    lName: 'Kumar',
    ID: '121'
}
let frd3 = {
    fName: 'Manu',
    lName: 'Kumar',
    ID: '121'
}
people.friends.push(frd1, frd2, frd3)
people.friends.pop()
console.log(people);
