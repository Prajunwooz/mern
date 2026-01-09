import { verifyToken } from "../utils/jwt.js";

// export const isauthenticated = async (req, res, next) => {
//     try {
//         const token=//loougin  token from header or cookie
//         const verify= await verifyToken(token) //vefify token means
//         if (!token) {
//             return res.status(401).json({
//                 message: "unauthenticated user"
//             })
//         }       
//         //verify token logic here

//         next(); // proceed to the next middleware or route handler
//     } catch (error) {
//         res.status(400).json({
//             message: "problem in authentication",   
//             error: error.message
//         })
//     }

// }
export const isauthenticated = async (req, res, next) => {
    try {
        const token=req.headers.authorization
        console.log(token)
        const tokenValue=token.split(" ")[1]; //here terminal get token from header with bearer in string so we have to split it to get only token it works index1 only in array 
        if (!tokenValue) {
            return res.status(401).json({
                message: "token is missing"
            })
        }
        const verify= await verifyToken(tokenValue) //vefify token means
        if (!verify) {
            return res.status(401).json({
                message: "unauthenticated user"
            })
        } 
        req.id=verify.id// when we write res in mdiddleware then we can access it in controller also      
        //verify token logic here
        req.token=tokenValue; // we are setting token in req object to use it in isauthorized middleware
        next(); // proceed to the next middleware or route handler
    } catch (error) {
        res.status(400).json({
            message: "problem in authentication",   
            error: error.message
        })
    }
}