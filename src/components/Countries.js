import React from 'react'

export default function Countries(props) {
  return (
    <div className="countriesContainer">
      <ul className="countriesList">
        { props.state.countries.map(country => (
          <li className="countryItem" key={country.numericCode}>
            <div className="flagContainer">
              <img className="flagImg" src={country.flag} alt={country.flag} />
            </div>
            <div className="countryInfoContainer">
              <h2 className="countryName">{country.name}</h2>
              <p className="countryText population"><span className="countrySubject">Population: </span>{ (country.population).toLocaleString() }</p>
              <p className="countryText region"><span className="countrySubject">Region: </span>{country.region}</p>
              <p className="countryText capital"><span className="countrySubject">Capital: </span>{country.capital}</p>
            </div>
          </li>
        )) }
      </ul>
    </div>
  )
}
