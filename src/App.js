import React, { useState} from 'react';
import './App.css';
import Form from './components/Form';
import PeopleDisplay from './components/PeopleDisplay';
import PlanetDisplay from './components/PlanetDisplay';
import appBackground from './components/images/starWars.png';

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
    setPlanetData([]);
  }

  const planetFinder = ( data ) => {
    setPlanetData([ data ]);
    console.log(planetData)
    setPersonData([]);
  }


  const styles = {
    backgroundImage: `url(${appBackground})`,
    backgroundSize: '95%', 
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '106vh',
    padding: '10%'
  };


  return (
    <div className="mainDisplayContainer" style={styles}>
      <Form  onPersonFinder={ personFinder } onPlanetFinder={planetFinder} />
      <PeopleDisplay path="/people" personData={personData} onPlanetFinder={planetFinder} />
      <PlanetDisplay path="/planets" planetData={planetData} />
    </div>
  );
}

export default App;
