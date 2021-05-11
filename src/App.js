import React, { useState} from 'react';
import './App.css';
import Form from './components/Form';
import PeopleDisplay from './components/PeopleDisplay';
import PlanetDisplay from './components/PlanetDisplay';
import appBackground from './components/images/starWars.png';
import appBackground2 from './components/images/mainBG.png';
import { Router } from '@reach/router';

function App() {
  const[personData, setPersonData] = useState([]);
  const [planetData, setPlanetData] = useState([]);

  const personFinder = ( data ) => {
    setPersonData([ data ]);
    let tempUrl = data.homeworld;
    fetch(tempUrl)
      .then(res => {
        res.json().then(json => {
          data.homeworldName = json.name
          setPersonData([ data ]);
        })
      })
    console.log(personData)
  }

  const planetFinder = ( data ) => {
    setPlanetData([ data ]);
    console.log(planetData)
  }


  const styles = {
    backgroundImage: `url(${appBackground2})`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'cover',
    width: 'cover',
    height: '100vh',
    padding: '5%',
    marginBottom: '0px'
  };

  const styles2 = {
    backgroundImage: `url(${appBackground})`,
    width: '90%',
    margin: '0',
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    height: '80%',
    padding: '2%'
  };

  return (
    <div className="mainBG" style={styles}>
      <div className="mainDisplayContainer" style={styles2}>
        <Form  onPersonFinder={ personFinder } onPlanetFinder={planetFinder} />
        <div className="displayContentMain">
          <Router>
            <PeopleDisplay path="/person/:id" personData={personData} onPlanetFinder={planetFinder} />
            <PlanetDisplay path="/planet/:id" planetData={planetData} /> 
          </Router>
        </div>
       
      </div>
    </div>
  );
}

export default App;
