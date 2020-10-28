import React from 'react'

export default function Countries(props) {
  return (
    <div className="countriesContainer">
      <ul className="countriesList">
        { props.state.countries.map(country => (
          <li key={country.numericCode}>
            <div className="flag">{country.flag}</div>
            <div className="countryInfoContainer">
              <h2 className="countryName">{country.nativeName}</h2>
              <p className="population">{country.population}</p>
              <p className="region">{country.region}</p>
              <p className="capital">{country.capital}</p>
            </div>
          </li>
        )) }
      </ul>
    </div>
  )
}
