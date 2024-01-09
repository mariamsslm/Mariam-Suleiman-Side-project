import express from 'express'
import  {singup , login , loggedInUser,logout} from '../controllers/UserController.js'
import { authenticate } from '../middlewares/authMiddleware.js';

const UserRoute = express.Router();



UserRoute.post('/singup',singup,authenticate)
UserRoute.post('/login',login)
UserRoute.get('/login-user',authenticate,loggedInUser);
UserRoute.post('/logout',logout)




export default UserRoute;


