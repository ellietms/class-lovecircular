const express = require("express")

const app = express();


// get request
app.get("/hellooo", (req,res) => {
    res.send(" hello world!! ")
} )

app.get("/bye/you/2", (req,res) => {
    res.send(" I am saying bye to you!!!!")
})

// post 

app.post("/submit", (req,res) => {
    const data = req.body;
    console.log(data)
    // res.json(`username is ${data} ` )
})






app.listen(5000, () => {
    console.log(" server is alive !!")
})

