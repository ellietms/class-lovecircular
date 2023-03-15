import express from "express";
import bodyParser from "body-parser";
import { v4 as uuid} from "uuid";
import dotenv from "dotenv";

const app = express();
app.use(bodyParser.json());
dotenv.config()

const dataBase = [{id: 1, name: "ellie" , surname: "tms"}]

app.get("/data" , (req,res) => {
    res.send(dataBase)
})

app.post("/info", (req, res) => {
    const data = req.body; 
    dataBase.push({...data , id : uuid()})
    res.send("congrats!")
})


app.listen(process.env.PORT, () => {
    console.log("App is listening")
})