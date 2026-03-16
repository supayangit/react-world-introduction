import React, { useState } from 'react';
import '../countries/country.css'

const Country = ({ country, handleVisitedCountries, handleSetFlags }) => {
    const [visited, setVisited] = useState(false);
    const [flagged, setFlagged] =useState(false);

    const handleVisited = () => {
        setVisited(!visited);
        handleVisitedCountries(country);
    }

    const handleFlags = () =>{
        setFlagged(!flagged);
        handleSetFlags(country);
    }


    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <h5>Capital: {country.capital.capital}</h5>
            <h5>Area: {country.area.area}, {country.area.area > 3000 ? "Large Country" : "Small Country"}</h5>
            <p>Population: {country.population.population}</p>

            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
            <button onClick={handleFlags}>{flagged? 'Flagged' : 'Not Flagged'}</button>
        </div>
    );
};

export default Country;