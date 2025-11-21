import express, {} from 'express';   //import express package 2nd step
// import { connectDatabase ,text} from './config/connectMongo.js';

// import { connect } from "mongoose";
// import{user} from './controller/user.controller.js';

// import router from './route/route.js';
const app=express();
const port=8000;

app.listen(port,()=>{     //.listen()inside this we make a function
      //listen is the express method to run the server
    console.log(`server is running at port ${port}`);
});

// connectDatabase();    // this is 3rd step to connecct the data base by calling the connecDataBase function from connectMongo.js
// text();
//git add.

