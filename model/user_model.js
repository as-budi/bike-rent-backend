import { Sequelize } from "sequelize";
import db from "../config/db_connection.js";

const { DataTypes } = Sequelize;

const Users = db.define('user',{
    name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    },
    balance:{
        type: DataTypes.INTEGER
    }
},{
    freezeTableName:true
});

export default Users;