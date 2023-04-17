

function callMe() {
  console.log("Ellie");
  axios.get("https://http://api.tvmaze.com/shows/82/episodes").then(data => console.log(data))
  //  fetch("https://http://api.tvmaze.com/shows/82/episodes")
  //  // {  method: "GET",
  //  //   mode: 'no-cors',
  //     // url: "https://localhost:8080/data",
  //     // headers: {'Content-Type': 'application/json'},
  //   .then((res) => console.log("DATA IS:", res.json()));
  //   console.log("PPPPPPP")
  // fetch()
  // return   axios.get("https://localhost:8080/data").then(data => console.log("DATA IS:", data.json()))
}
