//object in javascript ( it is a collection of key-value pairs ) it is close by curly braces {}
let person = {
    name: "John", //name is key and "John" is value
    age: 30,     //age is key and 30 is value
    isStudent: false, //isStudent is key and false is value
    hobbies: ["reading", "traveling", "swimming"], //hobbies is key and array of strings is value
}
delete person.age//to delete age key-value pair from the object
console.log(person); //to print the whole object
delete person.isStudent; //to delete a key-value pair from the object
console.log(person); //to print the whole object
console.log(person.age) 
// it is syntactically similar to JSON (JavaScript Object Notation) but not the same
//JSON is a data format that is used to store and exchange data
//JSON keys must be strings and values must be valid JSON data types (string, number, boolean, array, object, null)