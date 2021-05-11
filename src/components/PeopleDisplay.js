import React from 'react';



const PeopleDisplay = (props) => {

    const onClick = (e, url) => {
        console.log("This is the URL", url)
        e.preventDefault();
        getPlanet(url);
    }

    const getPlanet = (url) => {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => {
                if(res.status === 200){
                  return res.json()  
                } else {
                    throw new Error("These aren't the droids you're looking for")
                }
            })
            .then(data => {
                props.onPlanetFinder(data);
                resolve(data);
            })
            .catch(err => alert(err.message))
        })
    }

    return(
        <div className="cardMain">
            {props.personData.map((person) => {
                return(
                    <div className="module-border-wrap personCardMain">
                        <div className="nameBanner">
                            <h2 className="personName" key={person.index}>{person.name}</h2>
                        </div>
                        <div className="homeWorld">
                            <p id="whiteHomeLink">Home World: </p><p className="homeWorldLink" onClick={ (e) => onClick(e, person.homeworld)}>{person.homeworldName}</p>
                        </div>
                        <div className="birthYear">
                            <p id="white">Born: </p><p>{person.birth_year}</p>
                        </div>
                        <div className="bodySizes">
                            <p id="white2">Height: </p><p>{person.height} inches</p>
                            <p id="white2">Weight: </p><p>{person.mass} lbs</p>
                        </div>
                        <div className="features">
                            <p id="white2">Hair Color: </p><p>{person.hair_color}</p>
                            <p id="white2">Eye Color: </p><p>{person.eye_color}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}


export default PeopleDisplay;