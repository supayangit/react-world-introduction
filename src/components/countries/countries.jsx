import React, { use, useState } from 'react';
import Country from '../countries/country'
import './countries.css'

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [flags, setFlags] = useState([]);

    const handleSetFlags = (country) => {
        const newSetFlags = [...flags, country];
        setFlags(newSetFlags);
    }

    const handleVisitedCountries = (country) => {
        console.log('handle visited country clicked', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries);

    return (
        <div>
            <h1>In the Countries: {countries.length}</h1>
            <h3>Total countries visited: {visitedCountries.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>

            <div className='flag-box'>
                {
                    flags.map(country =>
                        <img key={country.cca3.cca3} className='flag' src={country.flags.flags.png} alt={country.flags.flags.alt} />
                    )
                }
            </div>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handleSetFlags={handleSetFlags}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;