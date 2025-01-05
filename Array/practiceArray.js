let shoppingList = []; //Create an empty array to use as a shopping list.
shoppingList.push("Milk","Bread","Apples"); //Add Milk, Bread, and Apples to your list.
shoppingList.splice(1,1,"Banana","Eggs") //Update "Bread" with Bananas and Eggs.
console.log(shoppingList)
shoppingList.pop();  //Remove the last item from the array and output it into the console.
console.log(shoppingList) 
shoppingList.sort() //Sort the list alphabetically.
console.log(shoppingList.indexOf("Milk")) //Find and output the index value of Milk
shoppingList.splice(1,0, "Carrots","Lettuce") //After Bananas, add Carrots and Lettuce.
console.log(shoppingList)

let newList = ["Juice","Pop"]  //Create a new list containing Juice and Pop.
console.log(shoppingList.concat(newList)) //Combine both lists, adding the new list twice to the end of the first list.

//Update "Bread" with Bananas and Eggs.
