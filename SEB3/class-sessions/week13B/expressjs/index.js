import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();
app.use(bodyParser.json());
dotenv.config()

const dataBase = [{id: 1, name: "ellie" , surname: "tms"}, {id:2, name: "student"}]

app.get("/home" , (req,res) => {
    res.send("Welcome to home page")
})

app.get("/data" , (req,res) => {
    res.send(dataBase)
})


app.get("/:surname", (req,res) => {
    console.log("======= PARAMS =======", req.params)
    res.send(`This is what we are getting from url ${req.params.surname}`)
})


app.get('/data/check', (req,res) => {
    try{
        console.log(req.query)
        let myName = req.query.name
        let myId = req.query.id
        let day = req.query.day
        res.send(`you find user name : ${myName} with Id : ${myId} and today is : ${day}`)
    } catch(error){
        throw new Error("This is the error", error)
    }

})




app.listen(process.env.PORT, () => {
    console.log("My App is Listening .......")
})