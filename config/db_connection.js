import {Sequelize} from "sequelize";

const db = new Sequelize('bike_rent_db','root','root',{
    host: "localhost",
    dialect: "mysql"
});

export default db;