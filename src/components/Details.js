import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import Arrow from '../img/arrow-left.svg'

class Details extends Component {
  getLanguages = () => {
    const country = this.props.location.countryData
    let languages = []

    country.languages.forEach( language => {
      languages.push(language.name)
    } )
    return languages.join(', ')
  }

  
  
  render() {
    const country = this.props.location.countryData
    return (
      <div>

        <div className="backButtonContainer">
          <NavLink className="" to='/'>
            <button className="backButton"><img className="leftArrow" src={Arrow} alt="left-arrow" />Back</button>
          </NavLink>
        </div>

        <div className="detailsFlagContainer">
          <img className="detailsFlagImg" src={country.flag} alt={country.flag} />
        </div>

        <div className="detailsCountryInfoContainer">
          <h2 className="detailsCountryName">{country.name}</h2>
          <p className="detailsCountryText native"><span className="detailsCountrySubject">Native Name: </span>{ (country.nativeName).toLocaleString() }</p>
          <p className="detailsCountryText population"><span className="countrySubject">Population: </span>{ (country.population).toLocaleString() }</p>
          <p className="detailsCountryText region"><span className="detailsCountrySubject">Region: </span>{country.region}</p>
          <p className="detailsCountryText subregion"><span className="detailsCountrySubject">Sub Region: </span>{country.subregion}</p>
          <p className="detailsCountryText capital"><span className="detailsCountrySubject">Capital: </span>{country.capital}</p>
          <br/>
          <p className="detailsCountryText toplevelDomain"><span className="detailsCountrySubject">Top Level Domain: </span>{country.topLevelDomain}</p>
          <p className="detailsCountryText currencies"><span className="detailsCountrySubject">Currencies: </span>{country.currencies[0].name}</p>
          <p className="detailsCountryText languages"><span className="detailsCountrySubject">Languages: </span>{this.getLanguages()}</p>
          <h3 className="detailsBorderName">Border Countries:</h3>
          <div className="detailsBorderContainer borders">
            <span className="borderCountry">{country.borders[0]} </span>
            <span className="borderCountry">{country.borders[1]} </span>
            <span className="borderCountry">{country.borders[2]} </span>
            <span className="borderCountry">{country.borders[3]}</span>
          </div>
        </div>

      </div>
    )
  }
}

export default Details