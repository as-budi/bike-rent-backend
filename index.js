import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/db_connection.js";
import router from "./controller/controller.js";


const app = express();

const sql_query = "SELECT NOW()";

db.query(sql_query, (err, result) => {
     if(err) {
          console.log(err)
     }
     else {
          console.log(result);
     }
})

// try {
//     await db.authenticate();
//     console.log('Database Connected...');
//     await users.sync();
// } catch (error) {
//     console.error(error);
// }

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(3001, ()=> console.log('Server running at port 3001...'));