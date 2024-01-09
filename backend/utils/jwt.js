import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()


const secret = `${process.env.JWT_SECRET}` 

//we have two functions 

// first one to create token
export const generateToken = (user) =>{
    return jwt.sign(
        {
        id : user.id,
        username: user.username,
        email : user.email,
        role : user.role

    },
    secret,{ expiresIn: '24h'});  //this token created valid for 24 h
};

// verify token
export const verifyToken = (token)=>{
    return jwt.verify(token, secret)
}