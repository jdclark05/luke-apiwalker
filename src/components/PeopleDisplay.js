import React from 'react';



const PeopleDisplay = (props) => {

    return(
        <div className="cardMain">
            {props.personData.map((person) => {
                return(
                    <div className="personCardMain">
                        <div className="nameBanner">
                            <h2 className="personName" key={person.index}>{person.name}</h2>
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