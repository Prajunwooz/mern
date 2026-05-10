import bcrypt from "bcryptjs"

export const hashpassword=async(password)=>{
    const result= await bcrypt.hash(password,10)  //here data comes from agrument and parameter make it run
    console.log(result)
    return result;
}