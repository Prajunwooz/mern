import express from "express"
import { connectDB } from "./config/connectMongo.js"
import { productRouter } from "./routes/product.route.js"
import { orderRouter } from "./routes/order.route.js"
import { userRoute } from "./routes/user.route.js"

const app = express()
app.use(express.json())



connectDB()
app.listen(8080, () => {
    console.log(`Server is running on port 8080`)
})

app.use("/product", productRouter)
app.use("/order", orderRouter)
app.use("/user",userRoute)

app.get("/", (req,res)=>{
    res.send("Hello world")
})