import React from 'react';
import '../countries/country.css'

const country = ({ country }) => {
    const handleVisited = () => {
        console.log("button clicked");
    }


    return (
        <div className="country">
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <h5>Capital: {country.capital.capital}</h5>
            <h5>Area: {country.area.area}, {country.area.area > 3000 ? "Large Country" : "Small Country"}</h5>
            <p>Population: {country.population.population}</p>

            <button onClick={handleVisited}>Not visited</button>
        </div>
    );
};

export default country;