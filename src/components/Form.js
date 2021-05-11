import React, { useState} from 'react';
import { navigate } from '@reach/router';


const Form = (props) => {
    const [optionValue, setOptionValue] = useState('person');
    const personUrl = 'http://swapi.dev/api/people/'
    const planetUrl = 'http://swapi.dev/api/planets/'

    const onChange = (e, selectionValue) => {
        setOptionValue(selectionValue);
    }

    const handleSubmit = (e, id) => {
        console.log("This is the ID", id)
        e.preventDefault();
        console.log(id)
        let value = optionValue;
        if(value === "person"){
            getPerson(id);
            navigate(`/${optionValue}/${id}`);
        } else {
            getPlanet(id);
            navigate(`/${optionValue}/${id}`);
        }
        e.target[1].value = "";
    }

    const getPerson = (value) => {
        return new Promise((resolve, reject) => {
            let url = (personUrl + value)
            fetch(url)
            .then(res => {
                if(res.status === 200){
                  return res.json()  
                } else {
                    throw new Error("These aren't the droids you're looking for")
                }
            })
            .then(data => {
                props.onPersonFinder(data);
                resolve(data);
            })
            .catch(err => alert(err.message))
        })
    }

    const getPlanet = (value) => {
        return new Promise((resolve, reject) => {
            let url = (planetUrl + value)
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
        <div className="formMain">
            <form onSubmit={ (e) => handleSubmit(e, e.target[1].value) } className="formForm">
                <div className="dropDownSelect">
                    <label className="selectLabel">Search For:</label>
                    <select onChange={ (e) => onChange(e, e.target.value)} className="selectSelect" placeholder="First name">
                        <option className="optionValue" value="person" >People</option>
                        <option className="optionValue" value="planet" >Planets</option>
                    </select>
                </div>
                <div className="inputDiv">
                    <label className="labelInput">id:</label>
                    <input className="inputInput"/>
                </div>
                <div className="buttonDiv">
                    <button className="buttonButton">Search</button>
                </div>
            </form>
        </div>
    )
}


export default Form;