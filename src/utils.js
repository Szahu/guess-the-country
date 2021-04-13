//COLORS: 
export const correctColor = '#95D575';
export const wrongColor = '#DE3C66';

//fethching json with list of all countries
export const fetchCountriesList = (callback) => {
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

//calling worldbak api to get population by country code
export const getCountryPopulation = function (countryCode, callback) {
    fetch(`https://api.worldbank.org/v2/country/${countryCode}/indicator/SP.POP.TOTL?format=json`)
    .then(res => res.json())
    .then(data => { callback(data[1][1].value)}); 
}

//formatting population into readable string
export function populationToFormatedString(population) {
  if(population) {
    let popString = population.toString();
    switch(popString.length) {
      case 9:
        return popString.slice(0, 3) + ' million';
      case 8:
        return popString.slice(0, 2) + ' million';
      case 7:
        return popString.slice(0, 1) + ' million';
      case 6:
        return popString.slice(0, 3) + ' thousand';
      case 5:
          return popString.slice(0, 2) + ' thousand';
      case 4:
        return popString.slice(0, 1) + ' thousand';
      case 3:
        return popString.slice(0, 2) + ' thousand';
      default:
        console.error('something went wrong');
    }
  } else {
    return 0;
  }
  
}

