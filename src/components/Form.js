import React, { useState} from 'react';


const Form = (props) => {
    const [optionValue, setOptionValue] = useState('1');
    const personUrl = 'http://swapi.dev/api/people/'
    const planetUrl = 'http://swapi.dev/api/planets/'

    const onChange = (e, selectionValue) => {
        setOptionValue(selectionValue);
        console.log(optionValue)
    }

    const handleSubmit = (e, id) => {
        console.log("This is the ID", id)
        e.preventDefault();
        console.log(id)
        let value = optionValue;
        if(value === "1"){
            getPerson(id);
        } else {
            getPlanet(id);
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
                        <option className="optionValue" value="1" >People</option>
                        <option className="optionValue" value="2" >Planets</option>
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