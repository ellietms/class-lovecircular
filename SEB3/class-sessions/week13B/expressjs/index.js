import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();
app.use(bodyParser.json());
dotenv.config()

const dataBase = [{id: 1, name: "ellie" , surname: "tms"}]

app.get("/home" , (req,res) => {
    res.send("Welcome to home page")
})

app.get("/data" , (req,res) => {
    res.send(dataBase)
})



app.listen(process.env.PORT, () => {
    console.log("My App is Listening .......")
})