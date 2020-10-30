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

  addBorderCountries = () => {
    const country = this.props.location.countryData.borders
    const countryAll = this.props.location.state.countriesAll
    let border = []
    country.forEach( item => {
      for (let i = 0; i < countryAll.length; i++) {
        if (item === countryAll[i].alpha3Code) {
          border.push([countryAll[i].name, countryAll[i]])
        }
      }
    } )
    return border
  }
  
  render() {
    const country = this.props.location.countryData
    return (
      <div id="detailsContainer" className="darkBg">

        <div className="backButtonContainer">
          <NavLink className="backButtonLink" to='/'>
            <button className="backButton"><img className="leftArrow" src={Arrow} alt="left-arrow" />Back</button>
          </NavLink>
        </div>

        <div className="detailsFlagContainer">
          <img className="detailsFlagImg" src={country.flag} alt={country.flag} />
        </div>

        <div className="detailsCountryInfoContainer">
          <h2 className="detailsCountryName">{country.name}</h2>
          <p className="detailsCountryText"><span className="detailsCountrySubject">Native Name: </span>{ (country.nativeName).toLocaleString() }</p>
          <p className="detailsCountryText"><span className="countrySubject">Population: </span>{ (country.population).toLocaleString() }</p>
          <p className="detailsCountryText"><span className="detailsCountrySubject">Region: </span>{country.region}</p>
          <p className="detailsCountryText"><span className="detailsCountrySubject">Sub Region: </span>{country.subregion}</p>
          <p className="detailsCountryText detailsCapital"><span className="detailsCountrySubject">Capital: </span>{country.capital}</p>
          <br/>
          <p className="detailsCountryText"><span className="detailsCountrySubject">Top Level Domain: </span>{country.topLevelDomain}</p>
          <p className="detailsCountryText"><span className="detailsCountrySubject">Currencies: </span>{country.currencies[0].name}</p>
          <p className="detailsCountryText detailsLanguages"><span className="detailsCountrySubject">Languages: </span>{this.getLanguages()}</p>
          
            <h3 className="detailsBorderName">Border Countries:</h3>
          <div className="detailsBorderContainer">
            {this.addBorderCountries().map( (border,ind) => (
              <NavLink className="countryLink" key={ind} to={{
                pathname: '/details',
                countryData: border[1],
                state: this.props.location.state
              }}>
                <div className="borderCountry">{border[0]}</div>
              </NavLink>
            ))}
          </div>
        </div>

      </div>
    )
  }
}

export default Details
