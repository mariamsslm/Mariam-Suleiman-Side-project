import { DataTypes, Model } from "sequelize";


export default (sequelize , DataTypes)=>{
    class Meme extends Model {
        static associate (models){     //if there is association between table
            Meme.belongsTo(models.UserModel)}
    }
    Meme.init({
        imageURL : DataTypes.STRING,
        textCaption : DataTypes.STRING,
        userId : DataTypes.INTEGER
    },{
        sequelize,
        modelName:'Meme',
        timestamps: true,
    });
    return Meme;
}