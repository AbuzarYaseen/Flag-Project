import React from 'react'

const CountryDetails = () => {

  return (
    <div>
      <h2>{flag.name.official}</h2>
      <p>Population: {flag.population}</p>
      <p>Region: {flag.region}</p>
      <p>Capital: {flag.capital}</p>
    </div>
  );
}

export default CountryDetails
