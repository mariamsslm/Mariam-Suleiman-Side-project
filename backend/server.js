import express from 'express'
import dotenv from 'dotenv'
import db from './models/index.js'
dotenv.config()


const app = express()
app.use (express.json());



const port = process.env.PORT  || 5001
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