import express from 'express'
import {createMeme , getAllMeme , getMemeById , updateMemeById , deleteMeme} from '../controllers/MemeController.js'

const MemeRoute =  express.Router();

MemeRoute.post('/add',createMeme)
MemeRoute.get('/read',getAllMeme)
MemeRoute.get('/read/:id', getMemeById)
MemeRoute.put('/edit',updateMemeById)
MemeRoute.delete('/delete/:id',deleteMeme)







export default MemeRoute;