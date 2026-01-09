import { Order } from "../schema/order.schema.js"
import { Product } from "../schema/product.schema.js"

// export const createOrderController = async (req,res) => {
//     try {
//         let data = req.body 
//         const order = await Order.create(data)
//         let orderQuantity = data.quantity // orderQuantity = 10
//         const id = data.productId 
//         const product = await Product.findById(id) // 90
//         const result = await Product.findByIdAndUpdate(id, {quantity : product.quantity - orderQuantity }, {new: true})
//         res.status(201).json({
//             message: "Order created successfully",
//             data: order,
//             result: result
//         })
//     } catch (error) {
//         res.status(500).json({
//             message: "Internal Server Error",
//             error: error.message
//         })
        
//     }
// }



export const createOrderController = async (req,res) => {
    try {
        let data = req.body  //CRUD operation
        
        let orderQuantity = data.quantity // orderQuantity = 10 dara.quantity reurn in order quantity
        const id = data.productId 
         const product = await Product.findById(id) // 90
     if(orderQuantity>product.quantity){
        res.status(400).json({
            message:"order quantity is greater than pruduct quantity"

        })
     } // we dont use process.exit here bcs it stops all synconous porcess
    else{
        const order = await Order.create(data)
       
        const result = await Product.findByIdAndUpdate(id, {quantity : product.quantity - orderQuantity }, {new: true})
        res.status(201).json({
            message: "Order created successfully",
            data: order,
            result: result
        })
    }
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
        
    }
}
