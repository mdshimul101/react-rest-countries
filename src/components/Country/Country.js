import React from 'react';
import './Country.css'
const Country = (props) => {
    const { name, capital, area, region, flags } = props.country;
    return (
        <div className='country'>
            <h3>Country Name: {name.common}</h3>
            <img src={flags.svg} alt="" />

            <h4>Capital : {capital}</h4>
            <p>Area : {area}</p>
            <p>Region : {region}</p>
        </div>
    );
};

export default Country;