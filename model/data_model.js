import db from "../config/db_connection.js";

export const getAllUsers = async(req, res) => {
     const sql_query = "SELECT * FROM user";

    db.query(sql_query, (err, result) => {
        if(err) {
            console.log(err)
        }
        else {
            res.send(result);
            console.log(result);
        }
    })
 }
// const { DataTypes } = Sequelize;

// const Users = db.define('user',{
//     name:{
//         type: DataTypes.STRING
//     },
//     email:{
//         type: DataTypes.STRING
//     },
//     password:{
//         type: DataTypes.STRING
//     },
//     refresh_token:{
//         type: DataTypes.TEXT
//     },
//     balance:{
//         type: DataTypes.INTEGER
//     }
// },{
//     freezeTableName:true
// });

// export default Users;