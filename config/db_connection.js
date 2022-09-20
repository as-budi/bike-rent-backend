import mysql from "mysql2";

const HOST = "localhost";
const USER = "root";
const PASSWORD = "root";
const DATABASE = "bike_rent_db";
const PORT = 3306;

const db = await mysql.createPool({
    host: HOST,
    port: PORT,
    user: USER,
    password: PASSWORD,
    database: DATABASE
});

export default db;