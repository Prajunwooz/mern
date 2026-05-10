// const a=10 //
// if(a>0){
//     console.log("true");
// }
// else if(a===10){
//     console.log("zero");
// }   
// else{
//     console.log("false");
// }

// //nested if else      //small brackets store the condition //big brackets store the code/logic/output to be executed
//     const data={
//         username:"admin",
//         password:"12345"
//     }
//     const inputUsername="admin";
//     const inputPassword="12345";
//     if(inputUsername===data.username){ //1st check the username if the email is correct then only check for password
//         if(inputPassword===data.password){
//             console.log("login successful");
//         }       
//         else{
//             console.log("incorrect password");//if the username is correct but password is incorrect
//         }
//     }
//     else{
//         console.log("incorrect username");//if the username is incorrect
//     }


const data={
    username:"admin", //we have to put comma between each key-value in object
    password:"12345",
    isLoggedIn:true
}
const inputUsername="admin";  // we havee to put == for const data type but in var and let we can put = only
const inputPassword="12345";
if(data.username===inputUsername){
    if(data.password==inputPassword){
        if(data.isLoggedIn==true){   // ! means not operator it will check for false condition it works in boolean only
            console.log("login successful");
        }
        else{console.log("user is not logged in")}
    }
    else{console.log("incorrect password")}
}


else{console.log("incorect username")}