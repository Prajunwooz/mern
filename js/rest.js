let data={name:"prajun",    //we use let to reassign value of variable
    password:"12345",
    age:22,
    city:"kolkata"};

    const hashedPassword="xyz12345"; //simulated hashed password for demonstration
    
    data={...data,password:hashedPassword}; //using rest operator to update password field
    console.log(data);