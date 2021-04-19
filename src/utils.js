//COLORS: 
export const correctColor = '#95D575';
export const wrongColor = '#DE3C66';

export const hasADublet = (array) => {
  for(let i = 0;i<array.length;i++) {
    for(let j = 0;j < array.length;j++) {
      if(i === j) {continue;}
      if(array[i] === array[j]) {return true;}
    }
  }
  return false;
}

//fethching json with list of all countries
export const fetchCountriesList = async (callback) => {
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
export const getCountryPopulation = async function (countryCode, callback) {
    await fetch(`https://api.worldbank.org/v2/country/${countryCode}/indicator/SP.POP.TOTL?format=json`)
    .then(res => res.json())
    .then(data => { callback(data[1][1].value)}); 
}

//formatting population into readable string
export function populationToFormatedString(population) {

  let finalPopulation = '';

  if(population) {
    let popString = population.toString();
    switch(popString.length) {
      case 10:
        finalPopulation = popString.slice(0, 1) + ',' + popString[2] + ' billion';
        break;
      case 9:
        finalPopulation = popString.slice(0, 3) + ',' + popString[4] + ' million';
        break;
      case 8:
        finalPopulation = popString.slice(0, 2)  + ',' + popString[3] + ' million';
        break;
      case 7:
        finalPopulation = popString.slice(0, 1)  + ',' + popString[2] + ' million';
        break;
      case 6:
        finalPopulation = popString.slice(0, 3)  + ',' + popString[4] + ' thousand';
        break;
      case 5:
          finalPopulation = popString.slice(0, 2)  + ',' + popString[3] + ' thousand';
          break;
      case 4:
        finalPopulation = popString.slice(0, 1)  + ',' + popString[2] + ' thousand';
        break;
      case 3:
        finalPopulation = popString.slice(0, 2)  + ',' + popString[3] + ' thousand';
        break;
      default:
        console.error('something went wrong');
        return 'gotta add more cases to the switch statement'
    }

    return finalPopulation;

  } else {
    return 0;
  }
  
}

