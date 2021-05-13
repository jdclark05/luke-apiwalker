import React from 'react';
import { navigate } from '@reach/router';

const PeopleDisplay = (props) => {
    
    const onClick = (e, url) => {
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
            let id = /\/(\d+)\/?$/.exec(url)[1]
            console.log(id)
            navigate(`/planet/${id}`);
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
                            <p id="white">Born: </p><p id="goldShadow2">{person.birth_year}</p>
                        </div>
                        <div className="bodySizes">
                            <div className="bodyMes1">
                                <p id="bodyMesText">Height: </p><p id="goldShadow">{person.height} cm</p>
                            </div>
                            <div className="bodyMes2">
                                <p id="bodyMesText">Weight: </p><p id="goldShadow" >{person.mass} kg</p>
                            </div>
                        </div>
                        <div className="featureStats">
                            <div className="hairDiv">
                                <p id="bodyMesText">Hair Color: </p><p id="goldShadow" >{person.hair_color} </p>
                            </div>
                            <div className="complDiv">
                                <p id="bodyMesText">Complexion: </p><p id="goldShadow">{person.skin_color} </p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}


export default PeopleDisplay;