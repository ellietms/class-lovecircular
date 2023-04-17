import fetch from "node-fetch";

  const result = [];
  const url = 'https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5061b5fc0dmshb2c4d064a15a60fp103b36jsn5a4a2c9b3dd1',
      'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    }
  };

async function checkResult(){
  await fetch(url, options)
    .then(response=>
        response.json()
    )
    .then(res => res.list.map(element => {return result.push(element)}))
    .catch(err => console.error('error:' + err));
    console.log(result)
    return result 
  }



checkResult()