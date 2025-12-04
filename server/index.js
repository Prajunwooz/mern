import express from 'express';
import { connectdatabase } from './config/connectMongo.js';
import { userrouter } from './router/user.route.js';

const app = express();//() means function call

app.use(express.json());

const PORT = 5000;
connectdatabase(); //we call in main file use single powershell

//app.listen(PORT) //check on localhost:5000

app.listen(PORT, () => { //listen method is used to start the server
    console.log(`Server is running on port ${PORT}`);
});

app.get('/user', (req, res) => { //get method is used to read data from the server
    res.get('Hello World!');     
});

app.use("/user",userrouter)

app.use("/name",userrouter)

app.use("/user" ,userrouter)

//npm.js is documentation for study