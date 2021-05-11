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
                        <p className="white">Population: </p><p>{planet.population}</p>
                    </div>
                    <div className="climate">
                        <p className="white">Climate: </p><p>{planet.climate}</p>
                    </div>
                    <div className="terrain">
                        <p className="white">Terrain: </p>
                        <div className="terrainFeatures">
                            <p>{planet.terrain}</p>
                        </div>
                    <div className="surfaceWater">
                        <p className="white">Surface Water Percentage: </p><p>{planet.surface_water}</p>
                    </div>
                    <div className="orbitInfo">
                        <div className="Orbit">
                            <p className="white">Day (in hrs):</p><p className="green"> {planet.rotation_period}</p>
                        </div>
                        <div className="Orbit">
                            <p className="white">Year (in days): </p><p>{planet.orbital_period}</p>
                        </div>
                    </div>
                </div>    
                )
            })}
        </div>
    );
}


export default PlanetDisplay;