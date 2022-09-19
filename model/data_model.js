import db from "../config/db_connection.js";

export const getAllUsers = async() => {
     const sql_query = "SELECT * FROM user";
     let respond = "";

     db.query(sql_query, (err, result) => {
          if(err) {
               respond = err;
          }
          else {
               //console.log(result);
               respond = result;
          }
          // console.log(respond);
     })
     console.log(respond);
     return respond;
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