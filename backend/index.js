import express from "express" //esmodel ma gareko   common js chutei tarika bata import hunccha
             //  "type": "module", we make is esmodele suru ma common .js hunccha
import { productRouter } from "./routes/product.route.js"
import { orderRouter } from "./routes/order.route.js"
import { userRoute } from "./routes/user.route.js"
import { fileRouter } from "./routes/file.route.js"
import { connectDB } from "./config/connectMongo.js"
import cors from "cors"


const app = express()
app.use(express.json())
app.use(express.static("./public"));  //public vitra k k cha sav lai browse ma herna milni banaunu just locallhost:8080/copy.jpg lekhera
app.use(cors("http://localhost:5173")) //frontend ko url halne


connectDB()
app.listen(8080, () => {
    console.log(`Server is running on port 8080`)
})

app.use("/product", productRouter)
app.use("/order", orderRouter)
app.use("/user",userRoute)
app.use("/file",fileRouter)

app.get("/", (req,res)=>{
    res.send("Hello world i am prajun") //local only run in one lAN wifi connected computer example: localhost:8080  and 
})

//install nodemailer
// set emailsetting in your gmail and copy password
// install mangodbatlas which is cloud database  tesle cha golbal url banaucha https://mern-nu-red.vercel.app/copy.png
// tes pachi mangbd kolera clusters ma janii ani new project banyaera tesko link lagera .env  ki compass rakhda ni hunchama rakhni anni last ma e-commerce bhanni thaoni
//database and network access ma garera  ip address ma add ip addresssgarni from  anywhere
//versel.com ma jani ani continue with github garni add new =project garne ani install garnu aaru haru is used to deploy garne
//tes pachi github ma jan ani new repository banau ani vs code bata git init garera git add . garera git commit -m "first commit" garera git branch -M main garera
//git remote add origin tesko link ani git push -u origin main garne
//tes pachi versel ma jan ani github bata import garne ani repository select garne ani deploy garne
//ani import backenk garne ani root directary ma vs code folder rakhni ani environment variables ma .env ma sav copy garera environment variable ma post garne ani deply garne
  


// git clone garera local ma code lina sakincha git profile bata lyayera ani tespachi npm install garera sabai package haru install garni ani npm run dev garera local ma run garni
//npm create vite@latest to create frontend
// ctrl + space to see suggestions and imports
// every code  run in app.jsx in react and mail.jsx ma home component run huncha