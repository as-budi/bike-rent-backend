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
    date_created:{
        type: DataTypes.DATE
    },
    date_updated:{
        type: DataTypes.DATE
    },
    balance:{
        type: DataTypes.INTEGER
    }
},{
    freezeTableName:true
});

export default Users;