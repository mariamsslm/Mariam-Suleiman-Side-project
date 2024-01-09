import express from 'express'
import {createMeme , getAllMeme , getMemeById , updateMemeById , deleteMeme} from '../controllers/MemeController.js'
import { authenticate ,checkRole} from '../middlewares/authMiddleware.js';

const MemeRoute =  express.Router();

MemeRoute.post('/add',createMeme)
MemeRoute.get('/read/all',getAllMeme)
MemeRoute.get('/read/:id', getMemeById)
MemeRoute.put('/edit',authenticate,checkRole(['admin','creator','user']),updateMemeById)
MemeRoute.delete('/delete/:id',authenticate,checkRole(['admin','creator','user']),deleteMeme)



export default MemeRoute;