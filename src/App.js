import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Details from './components/Details'
import ArrowDark from './img/arrow-left-dark.svg'
import ArrowLight from './img/arrow-left-light.svg'
import './css/header.css'
import './css/details.css'
import './css/search.css'
import './css/region.css'
import './css/countries.css'

class App extends Component {
  state = {
    isDark: false,
    filterOpen: false,
    countries: [],
    countriesAll:[],
    searchValue: "",
    page: ''
  }

  filterExpand = () => {
    const element = document.querySelector('.regionOptions').style
    if (this.state.filterOpen === false) {
      element.display = "block"
      this.setState({
        filterOpen: true
      })
    } else {
      element.display = "none"
      this.setState({
        filterOpen: false
      })
    }
  }

  handleFilterSubmit = (region) => {
    this.errorReset()
    document.querySelector('.regionOptions').style = "none"
    this.setState({
      filterOpen: false
    })
    this.callApi('region/', region)
  }

  handleSearchInput = (e) => {
    e.preventDefault()
    this.setState({
      searchValue: e.target.value
    })
  }

  handleInputSubmit = (e) => {
    this.errorReset()
    e.preventDefault()
    if (this.state.searchValue === "" ) {
      this.errorMessage()
    } else {
      this.callApi('name/', this.state.searchValue)
    }
  }

  callApi = async (type, val) => {
    const link = 'https://restcountries.eu/rest/v2/' + type + val
    const linkAll = 'https://restcountries.eu/rest/v2/all'
    const callAll = await fetch(linkAll)
    const dataAll = await callAll.json()
    const call = await fetch(link)
    const data = await call.json()

    if (data.status > 400) {
      this.errorMessage()
    } else {
      this.setState({
        countries: data,
        countriesAll: dataAll
      })
    }
  }

  errorMessage = () => {
    document.querySelector('.searchForm').style.border = "1px solid red"
    document.getElementById('searchContainer').classList.add("formAfter")
  }

  errorReset = () => {
    document.querySelector('.searchForm').style.border = "0"
    document.getElementById('searchContainer').classList.remove("formAfter")
  }

  changeStatePage = (name) => {
    this.setState({
      page: name
    })
  }

  darkModeToggle = () => {
    if (this.state.page === "main") {
      if (this.state.isDark === false) {
        console.log("light")
        document.getElementById('mainContainer').classList.add('lightBg')
        document.getElementById('mainContainer').classList.remove('darkBg')
        document.getElementById('headerContainer').classList.add('lightElem', 'lightText', 'lightBoxShadow')
        document.getElementById('headerContainer').classList.remove('darkElem', 'darkText', 'darkBoxShadow')
        document.getElementById('modeText').classList.add('moonLight')
        document.getElementById('modeText').classList.remove('moonDark')
        document.getElementById('searchForm').classList.add('lightElem', 'lightText', 'lightBoxShadow', 'lightSearchForm')
        document.getElementById('searchForm').classList.remove('darkElem', 'darkText', 'darkBoxShadow', 'darkSearchForm')
        document.getElementById('searchIcon').classList.add('searchIconLight')
        document.getElementById('searchIcon').classList.remove('searchIconDark')
        document.getElementById('searchInput').classList.add('lightElem', 'lightText', 'lightSearchInput')
        document.getElementById('searchInput').classList.remove('darkElem', 'darkText', 'darkSearchInput')
        document.getElementById('regionHeader').classList.add('lightElem', 'lightText', 'lightBoxShadow')
        document.getElementById('regionHeader').classList.remove('darkElem', 'darkText', 'darkBoxShadow')
        document.getElementById('regionIcon').classList.add('regionIconLight')
        document.getElementById('regionIcon').classList.remove('regionIconDark')
        document.getElementById('regionOptions').classList.add('lightElem', 'lightText', 'lightBoxShadow')
        document.getElementById('regionOptions').classList.remove('darkElem', 'darkText', 'darkBoxShadow')

        document.querySelectorAll('.flagContainer').forEach( item => {
          item.classList.add('lightBoxShadow')
          item.classList.remove('darkBoxShadow')
        } )

        document.querySelectorAll('.countryInfoContainer').forEach( item => {
          item.classList.add('lightElem', 'lightText', 'lightBoxShadow')
          item.classList.remove('darkElem', 'darkText', 'darkBoxShadow')
        } )
        this.setState({
          isDark: true
        })
      } else {
        console.log("dark")
        document.getElementById('mainContainer').classList.add('darkBg')
        document.getElementById('mainContainer').classList.remove('lightBg')
        document.getElementById('headerContainer').classList.add('darkElem', 'darkText', 'darkBoxShadow')
        document.getElementById('headerContainer').classList.remove('lightElem', 'lightText', 'lightBoxShadow')
        document.getElementById('modeText').classList.add('moonDark')
        document.getElementById('modeText').classList.remove('moonLight')
        document.getElementById('searchForm').classList.add('darkElem', 'darkText', 'darkBoxShadow', 'darkSearchForm')
        document.getElementById('searchForm').classList.remove('lightElem', 'lightText', 'lightBoxShadow', 'lightSearchForm')
        document.getElementById('searchIcon').classList.add('searchIconDark')
        document.getElementById('searchIcon').classList.remove('searchIconLight')
        document.getElementById('searchInput').classList.add('darkElem', 'darkText', 'darkSearchInput')
        document.getElementById('searchInput').classList.remove('lightElem', 'lightText', 'lightSearchInput')
        document.getElementById('regionHeader').classList.add('darkElem', 'darkText', 'darkBoxShadow')
        document.getElementById('regionHeader').classList.remove('lightElem', 'lightText', 'lightBoxShadow')
        document.getElementById('regionIcon').classList.add('regionIconDark')
        document.getElementById('regionIcon').classList.remove('regionIconLight')
        document.getElementById('regionOptions').classList.add('darkElem', 'darkText', 'darkBoxShadow')
        document.getElementById('regionOptions').classList.remove('lightElem', 'lightText', 'lightBoxShadow')

        document.querySelectorAll('.flagContainer').forEach( item => {
          item.classList.add('darkBoxShadow')
          item.classList.remove('lightBoxShadow')
        } )

        document.querySelectorAll('.countryInfoContainer').forEach( item => {
          item.classList.add('darkElem', 'darkText', 'darkBoxShadow')
          item.classList.remove('lightElem', 'lightText', 'lightBoxShadow')
        } )
        this.setState({
          isDark: false
        })
      }
    } else if (this.state.page === "details") {
      if (this.state.isDark === false) {
        console.log("light")
        document.getElementById('detailsContainer').classList.add('lightBg')
        document.getElementById('detailsContainer').classList.remove('darkBg')
        document.getElementById('headerContainer').classList.add('lightElem', 'lightText', 'lightBoxShadow')
        document.getElementById('headerContainer').classList.remove('darkElem', 'darkText', 'darkBoxShadow')
        document.getElementById('modeText').classList.add('moonLight')
        document.getElementById('modeText').classList.remove('moonDark')
        document.getElementById('backButton').classList.add('lightElem', 'lightText', 'lightBoxShadow')
        document.getElementById('backButton').classList.remove('darkElem', 'darkText', 'darkBoxShadow')
        document.getElementById('leftArrow').classList.add('leftArrowLight')
        document.getElementById('leftArrow').classList.remove('leftArrowDark')
        document.getElementById('detailsFlagImg').classList.add('lightBoxShadow')
        document.getElementById('detailsFlagImg').classList.remove('darkBoxShadow')
        document.getElementById('detailsCountryInfoContainer').classList.add('lightText')
        document.getElementById('detailsCountryInfoContainer').classList.remove('darkText')

        document.querySelectorAll('.borderCountry').forEach( item => {
          item.classList.add('lightElem', 'lightText', 'lightBoxShadow')
          item.classList.remove('darkElem', 'darkText', 'darkBoxShadow')
        } )
        this.setState({
          isDark: true
        })
      } else {
        console.log("dark")
        document.getElementById('detailsContainer').classList.add('darkBg')
        document.getElementById('detailsContainer').classList.remove('lightBg')
        document.getElementById('headerContainer').classList.add('darkElem', 'darkText', 'darkBoxShadow')
        document.getElementById('headerContainer').classList.remove('lightElem', 'lightText', 'lightBoxShadow')
        document.getElementById('modeText').classList.add('moonDark')
        document.getElementById('modeText').classList.remove('moonLight')
        document.getElementById('backButton').classList.add('darkElem', 'darkText', 'darkBoxShadow')
        document.getElementById('backButton').classList.remove('lightElem', 'lightText', 'lightBoxShadow')
        document.getElementById('leftArrow').classList.add('leftArrowDark')
        document.getElementById('leftArrow').classList.remove('leftArrowLight')
        document.getElementById('detailsFlagImg').classList.add('darkBoxShadow')
        document.getElementById('detailsFlagImg').classList.remove('lightBoxShadow')
        document.getElementById('detailsCountryInfoContainer').classList.add('darkText')
        document.getElementById('detailsCountryInfoContainer').classList.remove('lightText')
        
        document.querySelectorAll('.borderCountry').forEach( item => {
          item.classList.add('darkElem', 'darkText', 'darkBoxShadow')
          item.classList.remove('lightElem', 'lightText', 'lightBoxShadow')
        } )
        this.setState({
          isDark: false
        })
      } 
    }
  }

  render() {
    return (
      <div className="App">
        <Header darkMode={this.darkModeToggle} />
        <Switch>
          <Route exact path='/' render={()=> <Main  parentState={this.state} 
                                                    filterExpand={this.filterExpand}
                                                    handleFilterSubmit={this.handleFilterSubmit}
                                                    handleSearchInput={this.handleSearchInput}
                                                    handleInputSubmit={this.handleInputSubmit}
                                                    changeStatePage={this.changeStatePage}
                                                    callApi={this.callApi} />} />
          <Route path='/details' component={Details} />
        </Switch>
      </div>
    )
  }
}

export default App
