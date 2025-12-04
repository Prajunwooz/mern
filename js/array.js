// // // // const array = [10, 20, 30, 40, 50]; //array of numbers
// // // // console.log(array);
// // // // // aaray of stirings
// // // // const fruits = ["apple", "banana", "cherry", "date"];//aaple is at index 0, banana is at index 1, cherry is at index 2, date is at index 3
// // // // console.log(fruits);
// // // // console.log(fruits[0]); //to access the first element of the array
// // // // const mixedArray = [10, "hello", true, null, undefined, { name: "John" }, [1, 2, 3]]; //array of mixed data types
// // // // console.log(mixedArray);

// // // // // array of objects
// // // // const users = [
// // // //     { name: "Alice", age: 25 },{ name: "Bob", age: 30 },
// // // //     { name: "Charlie", age: 35 }
// // // // ];
// // // // console.log(users);
// // // // console.log(users[1].name); //to access the name of the second user (Bob)
// // // // console.log(typeof users); //to check the data type of users variable it will return object because array is a type of object in javascript
 

// // // //array method
// //  // const item=["item1","item2","item3"]; //array of strings
// // //     console.log(item);

// // //   const pushed=item.push("item4"); //to add an element at the end of the array //push method
// // //   console.log(item);
// // //     const popped=item.pop("iteam4"); //to remove an element from the end of the array //pop method
// // //     console.log(item);

// // //   const shifted=item.shift("iteam0"); //to remove an element from the beginning of the array //shift method
// // //   console.log(item);
// // //     const unshifted=item.unshift("item0"); //to add an element at the beginning of the array //unshift method
// // //     console.log(item);
// // //     console.log(typeof item); //to check the data type of item variable it will return object because array is a type of object in javascript
// // //    const check=item.includes("item2"); //to check if an element is present in the array or not //includes method
// // //     console.log(check); // it will return true if item2 is present in the array otherwise false
// // //     const length=item.length; //to find the length of the array //length property
// // //     console.log(length); // length of string only counted in js
// // //     const index=item.indexOf("item2"); //to find the index of an element in the array //indexOf method
// // //     console.log(index); // it will return 1 because item2 is at index 1 in the array
// // //     const sliced=item.slice(1,3); //to extract a portion of the array //slice method
// // //     console.log(item); // it will return ["item2", "item3"] because it will extract elements from index 1 to index 3 (excluding index 3)
// // //     console.log(item.reverse()); //to reverse the array //reverse method
// // //     console.log(item.join("")); //to join all the elements of the array into a string //join method it will join all the elements with "-" in between
// // //     const string=item.join("")
// // //     console.log(string.split("")); //to split a string into an array //split method it will split the string at each character
    
// // // join  is used to convert array to string
  
// // const name=["prajun"];
// // // const array=name.join("");
// // // console.log(array);
// // // const string=array.split("");
// // // console.log(string);
// // // // split is used to convert string to array
// // // const reversearray=name.reverse();
// // // console.log(reversearray); 
 
// // const reversedarray=name.reverse();
// // console.log(reversedarray);
// // const array=reversedarray.join("");
// // console.log(array); 
// // const string=array.split(""); 
// // console.log(string);
// // const reversedstring=string.reverse();
// // console.log(reversedstring);
// //  console.log(`The name is ${name} and the reversed name is ${reversedstring.join("")}`);
// // //  output will be The name is prajun and the reversed name is nujarp
   
// // const fruits = ["apple", "banana", "cherry", "date"];
// // const ft=fruits.join("  "); //to join all the elements of the array into a string with "-" in between
// // console.log(ft); // it will return "apple-banana-cherry-date"
// // const reverseyc=ft.split("  ").reverse().join("  "); //to reverse the string    
// // console.log(reverseyc); // it will return "date-cherry-banana-apple"
// // const tt=ft.split(" - "); //to split a string into an array at each "-"
// // console.log(tt); // it will return ["apple", "banana", "cherry", "date"]
// // const revversetc=tt.reverse(); //to reverse the array
// // console.log(revversetc); // it will return ["date", "cherry", "banana", "apple"]
// // console.log(`The fruits are ${fruits} and the reversed fruits are ${revversetc}`);

// // const ii=["item1","item2","item3"];
// // const joinedii=ii.join("  ");
// // console.log(joinedii);
// // const reversedii=joinedii.split("  ").reverse().join("  ");
// // console.log(reversedii);
// // const splitii=joinedii.split(" - ");
// // console.log(splitii);
// // const reversedsplitii=splitii.reverse();
// // console.log(reversedsplitii);
// // console.log(`The items are ${ii} and the reversed items are ${reversedsplitii}`);

// const word = ["prajun" ", "n", "u", "j", "a", "r", "p"];
// const reversedWord = word.reverse();
// console.log(reversedWord); // Output: ["o", "l", "l", "e", "h"]

const array = [1, 2, 3, 4, 5];
const prajun=array.map((num,index) => {
const table=num*2;
 console.log(index+1); //to print index value
console.log(`2 x ${num} = ${table}`); //we put value inside backtick to use ${} to use variable inside string
}); //which play all values

// in map method of array we have two parameters first is current value and second is index of that value
// const prajun=array.map((num, index) => {
//     const table=num*2;

const data=["prajun","kumar","saha"];
const pp=data.map((name,index) => { //1st parameter is current  all value of array , 2nd is all index of array
    const table=name.toUpperCase();
    console.log(index+1);
    console.log(`Name ${index+1}: ${table}`);   
});


const ayy=["ram","shyam","hari"];
const byy=ayy.filter((name,index) => {
    const cyy=name.includes("a")
    return cyy; // it will return true or false
})
console.log(byy); // it will return ["ram", "shyam", "hari"] because all names contain "a"


// const number=[1,2,3];
//     const num= number.filter((value,index)=>{
//         const phone= value.includes("EventCounts")
//         return phone;
//     })
//     console.log(num);