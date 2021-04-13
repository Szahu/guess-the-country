import React, { useState } from "react";
import { getCountryPopulation, fetchCountriesList, populationToFormatedString, correctColor, wrongColor } from "./utils";
import './App.css';

const TitleComponent = (props) => {
  return <p id="titleText">The country with population of <br/> <strong style={{fontSize: '33px'}}>{props.population}</strong> is:</p>
}

const MainCard = (props) => {

    const [pressedIndex, setPressedIndex] = useState(-1);
    const [guessCasted, setGuessCasted] = useState(false);
    const onClickCallback = (index) => {setGuessCasted(true); setPressedIndex(index);}

    return <div id="mainCard">
      <TitleComponent key='titleComponent' population={populationToFormatedString(props.countries[0].population)}/>
      {props.countries.map((country, i) => {
        return <CountryButton key={country.name} onClick={onClickCallback} index={i} isCorrect={ i===props.correctOne ? true : false}
         color={ guessCasted ? i===pressedIndex && i===props.correctOne ? correctColor : i===pressedIndex ?  wrongColor : i===props.correctOne ? correctColor : 'white' : 'white'} label={country.name}/>}
      )}
    </div>
}

const CountryButton = (props) => {
  return <button id="countryButton" onClick={() => props.onClick(props.index)} style={{backgroundColor: props.color}}>{props.label}</button>
}


class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    //console.clear();
    let randomCountries = [0, 0, 0, 0];
  
    for(let i = 0; i < randomCountries.length;i++) {
      randomCountries[i] = Math.floor(Math.random() * 200);
    }

    this.correctOne = Math.floor(Math.random() * 4);

    this.state = {randomCountries: randomCountries, loaded: false};
  }

  componentDidMount() {
    
    fetchCountriesList((res) => {

      this.setState({randomCountries: this.state.randomCountries.map((x) => {
        return {name: res[x].name, code: res[x].code, population: 0}
      })});

      for(let i = 0; i < this.state.randomCountries.length; i++) {
        getCountryPopulation(this.state.randomCountries[i].code, (data) => {
          let copy = [...this.state.randomCountries];
          let newItem = {...copy[i]};
          newItem.population = data;
          copy[i] = newItem;
          this.setState({randomCountries: copy, loaded: true});
        });
      } 
      
    }); 

  }


  render() {
    return <div>
      <MainCard countries={this.state.randomCountries} correctOne={this.correctOne}/>
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
