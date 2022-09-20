import { getAllUsers } from "../model/data_model.js";
import db from "../config/db_connection.js";

export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll({
            attributes:['id','name','email','date_created','date_updated']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const gau = (req, res) => {
     let data = getAllUsers()
     res.send(data);
}

export const getUsersByEmail = async(req, res) => {
    const userEmail = req.params.userEmail;
    const sql_query = `SELECT * FROM user where email = '${userEmail}'`;
    const [result, metadata] = await db.query(sql_query);
    res.send(result);
    console.log(metadata);
    console.log(result);
}