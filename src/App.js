import React, { useState } from "react";
import { getCountryPopulation, populationToFormatedString, correctColor, wrongColor, hasADublet } from "./utils";
import './App.css';

const MainCard = (props) => {

    const [pressedIndex, setPressedIndex] = useState(-1);
    const [guessCasted, setGuessCasted] = useState(false);
    const [score, setScore] = useState(0);
    const [totalGuesses, setTotalGuesses] = useState(0);
    const evaluateGuess = (index) => {return index===props.correctOne ? true : false};
    const onClickCallback = (index) => {
      setGuessCasted(true); 
      setPressedIndex(index);
      if(evaluateGuess(index)) {
        setScore(score+1);
      }
        setTotalGuesses(totalGuesses+1);
      }

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
      <ScoreDisplay score={score} total={totalGuesses}/>
      <ResetButton callback={() => {props.resetCallback(); setGuessCasted(false)}} guessCasted={guessCasted}/>
    </div>
}

const CountryButton = (props) => {
  return <button id="countryButton" onClick={() => props.onClick(props.index)} style={{backgroundColor: props.color}}>{props.label}</button>
}

const StaticCountryButton = (props) => {
  return <button id="countryButton" style={{backgroundColor: props.color}}>{props.label}</button>
}

const ResetButton = (props) => {
  return <button id={props.guessCasted ? "nextButton" : "nextButtonUnclickable"} onClick={props.guessCasted ? props.callback : null}>Next</button>
}

const TitleComponent = (props) => {
  return <p id="titleText">The country with population of <br/> <strong style={{fontSize: '33px'}}>{props.population}</strong> is:</p>
}

const ScoreDisplay = (props) => {
  return <div id="scoreDisplay">Score: {props.score} / {props.total}</div>
}

const Footer = () => {
  return <div id="footer">by Stanis??aw Solarewicz, statistic data fetched from: <a href="www.worldbank.org">www.worldbank.org</a></div>
}

const resetRandomCountryList = async (jsonWithCounties, callback) => {
  let randomCountries = [0, 0, 0, 0];
  while(hasADublet(randomCountries)) {
    for(let i = 0; i < randomCountries.length;i++) {
      randomCountries[i] = Math.floor(Math.random() * 200);
    }
  }

  randomCountries = randomCountries.map((x) => {return {name: jsonWithCounties[x].name, code: jsonWithCounties[x].code, population: 0}});

  for(let i = 0; i < randomCountries.length; i++) {
     await getCountryPopulation(randomCountries[i].code, (data) => {
      randomCountries[i].population = data;
    });
  } 
  const correctOne = Math.floor(Math.random() * 4);

  callback(randomCountries, correctOne);
}

class MainComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {randomCountries: [1,1,1,1], correctOne: 0, loaded: false};
    this.jsonWithCounties = 0;
    this.allGuesses = 0;
    this.correctGuesses = 0;
    
    this.loadedCountriesData = [0,0,0,0];
  }

  async componentDidMount() {

    const response = await fetch('countryList.json');
    this.jsonWithCounties = await response.json();

    resetRandomCountryList(this.jsonWithCounties, (randomCountries, correctOne) => {
      this.setState({randomCountries: randomCountries, correctOne: correctOne});
    });



    //PRELOADING COUNTRY DATA
    for(let i = 0;i < this.loadedCountriesData.length; i++) {
      
      let tempCountriesData = {};

      await resetRandomCountryList(this.jsonWithCounties, (randomCountries, correctOne) => {
          tempCountriesData.randomCountries=randomCountries; 
          tempCountriesData.correctOne=correctOne;
        });

        this.loadedCountriesData[i]=tempCountriesData;
    }


  }

  render() {

    const onGuessCastCallback = () => {

      this.loadedCountriesData.shift();
      resetRandomCountryList(this.jsonWithCounties, 
        (randomCountries, correctOne) => {
          this.loadedCountriesData.push({randomCountries: randomCountries, correctOne: correctOne});
        });

      this.setState({randomCountries: this.loadedCountriesData[0].randomCountries, correctOne: this.loadedCountriesData[0].correctOne});
    } 


    return <div>
      <MainCard resetCallback={onGuessCastCallback} 
        countries={this.state.randomCountries} correctOne={this.state.correctOne}/>
      <Footer/>
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
