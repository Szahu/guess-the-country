import React from "react";
import { getCountryPopulation, getData } from "./utils";
import './App.css';

const TitleComponent = (props) => {
  return <p id="titleText">The country with population of <strong style={{fontSize: '33px'}}>{props.population}</strong> is:</p>
}

const MainCard = (props) => {
    return <div id="mainCard">
      <TitleComponent population={props.population}/>
    </div>
}



class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    //console.clear();
    let randomCountries = [0, 0, 0, 0];
  
    for(let i = 0; i < randomCountries.length;i++) {
      randomCountries[i] = Math.floor(Math.random() * 200);
    }

    this.correctOne = Math.floor(Math.random() * 3);

    this.state = {randomCountries: randomCountries, loaded: false};
  }

  componentDidMount() {
    
    getData((res) => {

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

  /*
  render() {
    return (<div>
      <ul>
        {
          this.state.loaded ? 
           this.state.randomCountries.map((element) => {return <li key={element.code}>{element.population}</li>}) :
          <li>loading</li>
        }
      </ul>
      </div>)
  } */

  render() {
    return <div>
      <MainCard population={this.state.randomCountries[this.correctOne].population}/>
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
