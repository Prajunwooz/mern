import{userSchema} from '../model/user.model.js';

const  createUsercase=(req,res)=>{
    try {
        let data=req.body; //body from postman
      const result= awaituserScheme.create(data);
      res.json({
        message:"user created successfully",
        success:true,
        data:result,
      });
    } catch (error) {
        console.log(error);
        
    }
}