const url = 'https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=38.5&lat=-78.5';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0ca19c77e5mshab09285ced7023ep1235dcjsn8449274722b6',
    'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
  }
};

function callMe(){
    return fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));
}


