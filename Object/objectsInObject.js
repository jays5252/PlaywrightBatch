let company = {
    companyName: "Healthy Candy",
    activity: "food manufacturing",
    address: {
      street: "2nd street",
      number: "123",
      zipcode: "33116",
      city: "Miami",
      state: "Florida"
    },
    yearOfEstablishment: 2021
}

console.log(company.address.zipcode);
console.log(company.address["state"]);