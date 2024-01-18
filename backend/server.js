import express from 'express'
import dotenv from 'dotenv'
import db from './models/index.js'
import MemeRoute from './routes/MemeRoute.js'
import UserRoute from './routes/UserRoute.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
dotenv.config()


const app = express()
app.use (express.json());
app.use (cookieParser());
app.use(cors({
    origin:"http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200
}));


app.use('/meme', MemeRoute);
app.use('/user',UserRoute)



const port = process.env.PORT 
app.listen(port, async () => {
    console.log(`SERVER IS RUNNING ON PORT ${port}`);
    try {
        await db.sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await db.sequelize.sync();
        console.log('Database synced!');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})