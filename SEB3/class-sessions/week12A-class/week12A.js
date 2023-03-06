import express from "express";
import bodyParser from "body-parser";
import { v4 as uuid} from "uuid";

const app = express();
app.use(bodyParser.json());

// youTube 

const youtubeFootballData = [
    {
        id: 1,
        name: "video-1",
        type: "football"
    },
    {
        id: 2,
        name: "video-2",
        type:  "football"
    },
    {
        id: 3,
        name: "video-3",
        type: "football"
    }
] 


const youtubeHome = [
    {
        id: 1,
        name: "cloths",
        type: "cloth"
    },
    {
        id: 2,
        name: "rap",
        type: "music",
        singer: "lil-baby"
    },{
        id: 3,
        name: "how to use flowers",
        type:  "gardening"
    }
]


let youTubeUsers = [];


// asking for information - get 

app.get("/youtube/home" , (req,res) => {
    res.send(youtubeHome)
} )


app.get("/matches/football", (req,res) => {
    res.send(youtubeFootballData)
})

app.get("/youtube/users" , (req,res) => {
    res.send( youTubeUsers)
})


// post request - sending some data somewhere 

// post

app.post("/youtube/signup", (req,res)=> {
    let {id} = req.body
    id = uuid();
    const data = req.body; 
    youTubeUsers.push({...data , id : id})
    res.send("congradulations! you signed up")
})


// get - specific data
app.get("/user/:id", (req,res) => {
    // find this user in the database - youtubeusers by id
    const userId = req.params.id
    const specificUser = youTubeUsers.find(user => user.id === userId)
    res.send(specificUser)
})



// delete
app.delete("/user/:id", (req,res) => {
    const userId = req.params.id;
    const findUser = youTubeUsers.find(user => user.id === userId)
    youTubeUsers = youTubeUsers.filter(user => user.id !== userId)
    console.log("User" , findUser)
    res.send(`${findUser.name} is removed successfuly!!`)
})



// update




app.listen(8000, () => {
    console.log(" My app is running!")
})



