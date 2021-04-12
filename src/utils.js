export const getData = (callback) => {
    fetch('countryList.json', {headers: {
      'Content-Type': 'applicaton/json',
      'Accept': 'application/json'
    }})
    .then(function(response){
      return response.json();
    })
    .then(function(myJson){
      callback(myJson)
    });
}

export const getCountryPopulation = function (countryCode, callback) {

    fetch(`https://api.worldbank.org/v2/country/${countryCode}/indicator/SP.POP.TOTL?format=json`)
    .then(res => res.json())
    .then(data => { callback(data[1][1].value)}); 
    
}

