// ternary operator
 const a=10;
 const result=(a>0) ? "positive" : "negative"; // if a>0 is true then result will be "positive" otherwise "negative"
 console.log(result);

 const name="prajun"; 
 const value=(name.length==6 ? console.log(true) : console.log(false));
 console.log(`The name has ${name.length} characters.`); //template literals we can use "${}" to insert variables inside strings
 // ? act as if
 // : act as else

    const data={
        username:"admin",
        password:"12345"
    }
    const inputUsername="amin";
    const inputPassword="12345";
    

   const login=(
    data.username==inputUsername ? 
    data.password==inputPassword?
    console.log("login successful"):
    console.log("invalid password")
    :console.log("incorrect username") 
    
   )
   
   const base={
    emai:"@gmail.com",
    code:"123"
   }
   const aakash="aakash";
   const code="123";

   const check=(base.email==aakash? 
   base.code==code? console.log("valid email")
   :console.log("welcome aakash")


    :console.log("invalid email")

   )
