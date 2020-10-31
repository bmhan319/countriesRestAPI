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
    isDark: true,
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
    if (this.state.isDark === true) {
      document.documentElement.style.setProperty('--DarkElem', 'hsl(0, 0%, 100%)')
      document.documentElement.style.setProperty('--DarkBg', 'hsl(0, 0%, 98%)')
      document.documentElement.style.setProperty('--DarkText', 'hsl(200, 15%, 8%)')
      document.documentElement.style.setProperty('--DarkInput', 'hsl(0, 0%, 52%)')
      document.getElementById('modeText').classList.add('moonLight')
      document.getElementById('modeText').classList.remove('moonDark')
      this.setState({
        isDark: false
      })
    } else {
      document.documentElement.style.setProperty('--DarkElem', 'hsl(209, 23%, 22%)')
      document.documentElement.style.setProperty('--DarkBg', 'hsl(207, 26%, 17%)')
      document.documentElement.style.setProperty('--DarkText', 'hsl(0, 0%, 100%)')
      document.documentElement.style.setProperty('--DarkInput', '#000')
      document.getElementById('modeText').classList.add('moonDark')
      document.getElementById('modeText').classList.remove('moonLight')
      this.setState({
        isDark: true
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
                                                    changeStatePage={this.changeStatePage}
                                                    callApi={this.callApi} />} />
          <Route path='/details' component={Details} />
        </Switch>
      </div>
    )
  }
}

export default App
