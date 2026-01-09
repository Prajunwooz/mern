import express from "express" //esmodel ma gareko   common js chutei tarika bata import hunccha
             //  "type": "module", we make is esmodele suru ma common .js hunccha
import { connectDB } from "./config/connectMongo.js"
import { productRouter } from "./routes/product.route.js"
import { orderRouter } from "./routes/order.route.js"
import { userRoute } from "./routes/user.route.js"
import { fileRouter } from "./routes/file.route.js"


const app = express()
app.use(express.json())
app.use(express.static("./public"));  //public vitra k k cha sav lai browse ma herna milni banaunu just locallhost:8080/copy.jpg lekhera



connectDB()
app.listen(8080, () => {
    console.log(`Server is running on port 8080`)
})

app.use("/product", productRouter)
app.use("/order", orderRouter)
app.use("/user",userRoute)
app.use("/file",fileRouter)

app.get("/", (req,res)=>{
    res.send("Hello world")
})
//install path 
// set emailsetting in your gmail and copy password
// install mangodbatlas