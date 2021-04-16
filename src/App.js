import React, { useState } from "react";
import { getCountryPopulation, populationToFormatedString, correctColor, wrongColor, hasADublet } from "./utils";
import './App.css';

// TODO: 
//   -add api data caching
//   -display population of each country
  

const MainCard = (props) => {

    const [pressedIndex, setPressedIndex] = useState(-1);
    const [guessCasted, setGuessCasted] = useState(false);
    const onClickCallback = (index) => {setGuessCasted(true); setPressedIndex(index);}

    const chooseRightColor = (i) => {
      if(guessCasted) {
        if(i===pressedIndex && i===props.correctOne) {return correctColor;}
        else if(i===pressedIndex) {return wrongColor;} 
        else if(i===props.correctOne) {return correctColor}
        else {return 'white';}
      }
    }

    const correctButton = (country, i) => {
      if(!guessCasted) {
        return <CountryButton key={country.name} onClick={onClickCallback} index={i}
        color={chooseRightColor(i)} label={country.name}/>
      } else if(guessCasted) {
        return <StaticCountryButton key={country.name} color={ guessCasted ? i===pressedIndex && i===props.correctOne ? correctColor : i===pressedIndex ?  wrongColor : i===props.correctOne ? correctColor : 'white' : 'white'} label={country.name}/>
      }
    }

    return <div id="mainCard">
      <TitleComponent key='titleComponent' population={populationToFormatedString(props.countries[props.correctOne].population)}/>
      {props.countries.map((country, i) => {
        return correctButton(country, i);}
      )}
      <ResetButton callback={() => {props.resetCallback(); setGuessCasted(false)}}/>
    </div>
}

const CountryButton = (props) => {
  return <button id="countryButton" onClick={() => props.onClick(props.index)} style={{backgroundColor: props.color}}>{props.label}</button>
}

const StaticCountryButton = (props) => {
  return <button id="countryButton" style={{backgroundColor: props.color}}>{props.label}</button>
}

const ResetButton = (props) => {
  return <button id="nextButton" onClick={props.callback}>Next</button>
}

const TitleComponent = (props) => {
  return <p id="titleText">The country with population of <br/> <strong style={{fontSize: '33px'}}>{props.population}</strong> is:</p>
}

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    //console.clear();
    let randomCountries = [0, 0, 0, 0];

    for(let i = 0; i < randomCountries.length;i++) {
      randomCountries[i] = Math.floor(Math.random() * 200);
    }

    const correctOne = Math.floor(Math.random() * 4);

    this.state = {randomCountries: randomCountries, correctOne: correctOne, loaded: false};
    this.jsonWithCounties = 0;
    this.resetRandomCountryList = this.resetRandomCountryList.bind(this);
    this.allGuesses = 0;
    this.correctGuesses = 0;
  }

  resetRandomCountryList = async () => {
    let randomCountries = [0, 0, 0, 0];
    while(hasADublet(randomCountries)) {
      for(let i = 0; i < randomCountries.length;i++) {
        randomCountries[i] = Math.floor(Math.random() * 200);
      }
    }
  
    randomCountries = randomCountries.map((x) => {return {name: this.jsonWithCounties[x].name, code: this.jsonWithCounties[x].code, population: 0}});

    for(let i = 0; i < randomCountries.length; i++) {
       await getCountryPopulation(randomCountries[i].code, (data) => {
        randomCountries[i].population = data;
      });
    } 
    const correctOne = Math.floor(Math.random() * 4);

    this.setState({randomCountries: randomCountries, correctOne: correctOne})
  
  }

  async componentDidMount() {

    const response = await fetch('countryList.json');
    this.jsonWithCounties = await response.json();

    this.resetRandomCountryList();

  }

  render() {
    return <div>
      <MainCard resetCallback={this.resetRandomCountryList} countries={this.state.randomCountries} correctOne={this.state.correctOne}/>
      </div>;
  }
}

function App() {
  return (
    <div>
    <div className="background-image"></div>
      <div className="content">
      <MainComponent/>
      </div>
    </div>
  );
}

export default App;
