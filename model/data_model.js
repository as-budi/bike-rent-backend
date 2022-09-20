import db from "../config/db_connection.js";

export function getAllUsers() {
     // const dbPromise = db.promise()
     const sql_query = "SELECT * FROM user";
     // const [rows, field] = await dbPromise.execute(sql_query);

     return db.query(sql_query, (err, result) => {
          if(err) {
               return err;
          }
          else {
               console.log(result);
               return result;
          }
     });
     // respond = "hello world"
     // console.log(rows);
     // return rows;
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