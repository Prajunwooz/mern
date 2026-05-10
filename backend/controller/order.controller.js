import { Order } from "../schema/order.schema.js"
import { Product } from "../schema/product.schema.js"
import { sendMail } from "../utils/nodemailer.js"

// export const createOrderController = async (req,res) => {
//     try {
//         let data = req.body  //CRUD operation
        
//         let orderQuantity = data.quantity // orderQuantity = 10 dara.quantity reurn in order quantity
//         const id = data.productId 
//         const email = data.userInfo.email
//         console.log(email)
//          const product = await Product.findById(id) // 90
//      if(orderQuantity>product.quantity){
//         res.status(400).json({
//             message:"order quantity is greater than pruduct quantity"

//         })
//      } // we dont use process.exit here bcs it stops all synconous porcess
//     else{
//         const order = await Order.create(data)
        
//         const result = await Product.findByIdAndUpdate(id, {quantity : product.quantity - orderQuantity }, {new: true})
//         await sendMail(
//   email,
//   "🛍️ Your Order is Confirmed!",
//   `
//   <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:20px;">
    
//     <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.05);">
      
//       <!-- Header -->
//       <div style="background:#4CAF50; color:#ffffff; padding:20px; text-align:center;">
//         <h2 style="margin:0;">🎉 Order Confirmed</h2>
//         <p style="margin:5px 0 0;">Thank you for shopping with us!</p>
//       </div>

//       <!-- Body -->
//       <div style="padding:20px; color:#333;">
//         <p>Hello,</p>

//         <p>Your order has been placed successfully. We're getting it ready for you! 🚀</p>

//         <!-- Order Details -->
//         <div style="background:#f9f9f9; padding:15px; border-radius:8px; margin:20px 0;">
//           <h3 style="margin-top:0;">📦 Order Details</h3>
//           <p><strong>Product ID:</strong> ${id}</p>
//           <p><strong>Quantity:</strong> ${orderQuantity}</p>
//         </div>

//         <p>You’ll receive another update once your order is shipped. 📬</p>

//         <!-- Button -->
//         <div style="text-align:center; margin:25px 0;">
//           <a href="https://yourwebsite.com/orders"
//              style="background:#4CAF50; color:#fff; padding:12px 20px; text-decoration:none; border-radius:6px; display:inline-block; font-weight:bold;">
//              View Your Order
//           </a>
//         </div>

//         <p>If you have any questions, just reply to this email—we’re here to help.</p>

//         <p style="margin-top:30px;">Best regards,<br/><strong>Your Store Team</strong></p>
//       </div>

//       <!-- Footer -->
//       <div style="background:#f1f1f1; text-align:center; padding:15px; font-size:12px; color:#777;">
//         © 2026 Your Store. All rights reserved.
//       </div>

//     </div>
//   </div>
//   `
// );
//  res.status(201).json({
//             message: "Order created successfully",
//             data: order,
//             result: result
//         })
//     }
//     } catch (error) {
//         res.status(500).json({
//             message: "Internal Server Error",
//             error: error.message
//         })
        
//     }
// }


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


export const createOrderController = async (req, res) => {
  try {
    const data = req.body;
    const orderQuantity = data.quantity;
    const id = data.productId;
    const email = data.userInfo.email;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    if (orderQuantity > product.quantity) {
      return res.status(400).json({
        message: "Order quantity is greater than product quantity"
      });
    }

    // Atomic update (safe)
    const result = await Product.findOneAndUpdate(
      { _id: id, quantity: { $gte: orderQuantity } },
      { $inc: { quantity: -orderQuantity } },
      { new: true }
    );

    if (!result) {
      return res.status(400).json({
        message: "Not enough stock"
      });
    }

    const order = await Order.create(data);

    // Send email safely
    try {
      await sendMail({
  email: email,
  subject: "🛍️ Your Order is Confirmed!",
  html: `
    <div style="font-family: Arial, sans-serif; background-color:#f9f9f9; padding:20px;">
      <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; padding:20px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
        
        <h2 style="color:#4CAF50; text-align:center;">🎉 Order Confirmed!</h2>
        
        <p style="font-size:16px; color:#333;">
          Hi there,<br><br>
          Thank you for your purchase! Your order has been successfully placed and is now being processed.
        </p>

        <div style="background:#f1f1f1; padding:15px; border-radius:8px; margin:20px 0;">
          <p style="margin:0; font-size:15px; color:#555;">
            📦 <strong>Estimated Delivery Time:</strong><br>
            Your order will arrive within <strong>3–5 business days</strong>.
          </p>
        </div>

        <p style="font-size:15px; color:#333;">
          We’ll notify you once your order is shipped. Stay tuned!
        </p>

        <div style="text-align:center; margin-top:20px;">
          <a href="#" style="background:#4CAF50; color:#fff; padding:12px 20px; text-decoration:none; border-radius:5px; font-size:14px;">
            Track Your Order
          </a>
        </div>

        <p style="font-size:13px; color:#999; margin-top:30px; text-align:center;">
          Thank you for shopping with us ❤️
        </p>

      </div>
    </div>
  `
});
    } catch (error) {
      console.log("Email failed:", error.message);
    }

    res.status(201).json({
      message: "Order created successfully",
      data: order,
      result: result
    });

  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message
    });
  }
};