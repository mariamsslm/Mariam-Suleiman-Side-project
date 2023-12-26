import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
import Meme from './meme.js'
import User from './user.js'
dotenv.config()




//connection sequelize with config
const sequelize = new Sequelize (
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host:process.env.DB_HOST,
    dialect:'mysql',
  }
);

// initialize to each Model
const MemeModel = Meme(sequelize , Sequelize);
const UserModel = User(sequelize, Sequelize)





// creation db
const db = {
  sequelize,
  Sequelize,
  MemeModel,
  UserModel
}



//loop to test if there is association to apply association function 
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
})


export default db;