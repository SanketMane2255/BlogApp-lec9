const jwt = require('jsonwebtoken')


// exports.auth = (req,res,next) => {
//     try{
//         const token = req.headers.authorization.split(" ")[1]

//         if(!token) return res.status(400).json({message:"token is missing"})

//         decode = jwt.verify(token, process.env.secret_key)

//         req.user = decode

//         console.log(req.user)

//         next()
         
//     } catch(error){
//         res.status(400).json({message:error})
//     }
// }



exports.auth = (req, res, next) => {
    try {
        
        const token = req.headers.authorization?.split(" ")[1];  
        
        if (!token) {
            return res.status(400).json({ message: "Token missing" });
        }

      
        const decoded = jwt.verify(token, process.env.secret_key);
        
       
        req.user = decoded;

        next();
    } catch (error) {
     
        console.error("Authentication error:", error); 
        return res.status(401).json({ message: "Invalid or expired token" });  
    }
};