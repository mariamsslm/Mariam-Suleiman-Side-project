import { DataTypes, Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.MemeModel, {
        foreignKey: "userId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.ENUM("admin" , "user" ,"creator"),
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
