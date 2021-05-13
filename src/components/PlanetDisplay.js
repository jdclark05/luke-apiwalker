import React from 'react';

const PlanetDisplay = (props) => {


    return(
        <div className="cardMain2">
            {props.planetData.map((planet) => {
                return(
                <div className="personCardMain">
                    <div className="nameBanner">
                        <h2 className="personName" key={planet.index}>{planet.name}</h2>
                    </div>
                    <div className="population">
                        <p className="popText">Population: </p><p id="goldShadow3" >{planet.population}</p>
                    </div>
                    <div className="climate">
                        <p className="climText">Climate: </p>
                        <div className="climFeatures">
                            <p id="goldShadow2">{planet.climate}</p>
                        </div>
                    </div>
                    <div className="terrain">
                        <p className="terrText">Terrain: </p>
                        <div className="terrainFeatures">
                            <p id="goldShadow2">{planet.terrain}</p>
                        </div>
                    </div>
                    <div className="surfaceWater">
                        <p className="white">Surface Water Percentage: </p><p id="goldShadow3">{planet.surface_water}</p>
                    </div>
                    <div className="orbitInfo">
                        <div className="Orbit">
                            <p className="white">Day (in hrs):</p><p id="goldShadow3"> {planet.rotation_period}</p>
                        </div>
                        <div className="Orbit">
                            <p className="white">Year (in days): </p><p id="goldShadow3">{planet.orbital_period}</p>
                        </div>
                    </div>
                </div>    
                )
            })}
        </div>
    );
}


export default PlanetDisplay;