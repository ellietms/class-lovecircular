import express from "express";
import bodyParser from "body-parser";
import  { createPool } from "mysql";


const app = express();
app.use(bodyParser.json());

const pool = createPool({
    host:"localhost",
    user: "root",
    password: "mySQL2323@@",
    database: "customers",
    connectionLimit: 10
})

app.get("/check", (res, req) => {
    pool.query("select * from customerinfo",  (err, result) => {
        if(err){
            console.log(err)
        }
        return  result;
    })
})


app.listen(9000, () => {
    console.log("App is listening")
})