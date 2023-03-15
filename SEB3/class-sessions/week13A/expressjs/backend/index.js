import axios from "axios";

function callMe(){
   return  axios.get("https://localhost:8080/data").then(data => console.log("DATA IS:", data.json()))
}


