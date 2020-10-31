import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Countries(props) {
  return (
    <div className="countriesContainer">
      <ul className="countriesList">
        { props.state.countries.map( (country,ind) => (
          <li className="countryItem" key={ind}>
            <NavLink className="countryLink" to={{
              pathname: '/details',
              countryData: country,
              changeStatePage: props.changeStatePage,
              loadDayImages: props.loadDayImages,
              callApi: props.callApi,
              state: props.state

            }}>
            <div className="flagContainer">
              <img className="flagImg darkBoxShadow" src={country.flag} alt={country.flag} />
            </div>
            <div className="countryInfoContainer darkElem darkText darkBoxShadow">
              <h2 className="countryName">{country.name}</h2>
              <p className="countryText"><span className="countrySubject">Population: </span>{ (country.population).toLocaleString() }</p>
              <p className="countryText"><span className="countrySubject">Region: </span>{country.region}</p>
              <p className="countryText"><span className="countrySubject">Capital: </span>{country.capital}</p>
            </div>
            </NavLink>
          </li>
        )) }
      </ul>
    </div>
  )
}
