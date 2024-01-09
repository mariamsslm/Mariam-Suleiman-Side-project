import  {verifyToken} from '../utils/jwt.js'

export const authenticate = async (req , res ,next)=>{
    try{
        //access token 
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({message: "Not Authenticated"});  
        }
        //check if the token valid(correct)
        const decoded = verifyToken(token);
      
        req.user = decoded


        next();
    }catch(error){
        console.error(error)
        res.status(401).json({message : error})
    }
};

///authorization

export const checkRole = (roles) => (req, res, next) => {
    if (req.user && roles.includes(req.user.role)) {
        next();
    } else {
        res.status(403).json({ message: 'Forbidden: You do not have the required permissions.' });
    }
};