import express from 'express'
import  {singup , login , loggedInUser} from '../controllers/UserController.js'
import { authenticate } from '../middlewares/authMiddleware.js';

const UserRoute = express.Router();



UserRoute.post('/singup',singup)
UserRoute.post('/login',login)
UserRoute.get('/login-user', authenticate,loggedInUser);




export default UserRoute;


