import React, {Component} from 'react'
import Arrow from '../img/arrow-left.svg'

class Details extends Component {


  
  
  render() {
    const country = this.props.location.countryData
    return (
      <div>

        <div className="backButtonContainer">
          <button className="backButton"><img className="leftArrow" src={Arrow} alt="left-arrow" />Back</button>
        </div>

        <div className="detailsFlagContainer">
          <img className="detailsFlagImg" src={country.flag} alt={country.flag} />
        </div>

        <div className="detailsCountryInfoContainer">
          <h2 className="detailsCountryName">{country.name}</h2>
          <p className="detailsCountryText native"><span className="detailsCountrySubject">Native Name: </span>{ (country.nativeName).toLocaleString() }</p>
          <p className="countryText population"><span className="countrySubject">Population: </span>{ (country.population).toLocaleString() }</p>
          <p className="detailsCountryText region"><span className="detailsCountrySubject">Region: </span>{country.region}</p>
          <p className="detailsCountryText subregion"><span className="detailsCountrySubject">Sub Region: </span>{country.subregion}</p>
          <p className="detailsCountryText capital"><span className="detailsCountrySubject">Capital: </span>{country.capital}</p>
          <br/>
          <p className="detailsCountryText toplevelDomain"><span className="detailsCountrySubject">Top Level Domain: </span>{country.topLevelDomain}</p>
          <p className="detailsCountryText currencies"><span className="detailsCountrySubject">Currencies: </span>{country.currencies[0].name}</p>
          <p className="detailsCountryText languages"><span className="detailsCountrySubject">Languages: </span>{country.languages[0].name}, {country.languages[1].name}, {country.languages[2].name}</p>
          <h3 className="detailsBorderName">Border Countries:</h3>
          <p className="detailsCountryText borders">
            <span className="borderCountry">{country.borders[0]}, </span>
            <span className="borderCountry">{country.borders[1]}, </span>
            <span className="borderCountry">{country.borders[2]}</span>
          </p>
        </div>

      </div>
    )
  }
}

export default Details
