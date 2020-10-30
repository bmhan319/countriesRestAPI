import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Details from './components/Details'
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
    searchValue: ""
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

  darkModeToggle = () => {
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
      this.setState({
        isDark: false
      })
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
                                                    callApi={this.callApi} />} />
          <Route path='/details' component={Details} />
        </Switch>
      </div>
    )
  }
}

export default App
