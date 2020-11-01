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
    searchValue: "",
    page:'main'
  }

  //used to expand the 'Region Filter' menu
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

  //used to invoke API call function to gather user selected data and close menu
  handleFilterSubmit = (region) => {
    this.errorReset()
    document.querySelector('.regionOptions').style = "none"
    this.setState({
      filterOpen: false
    })
    this.callApi(region)
  }

  //takes user typed input and puts it into state
  handleSearchInput = (e) => {
    e.preventDefault()
    this.setState({
      searchValue: e.target.value
    })
  }

  //used to invoke API call function to gather user input data with error handling for empty field
  handleInputSubmit = (e) => {
    this.errorReset()
    e.preventDefault()
    if (this.state.searchValue === "" ) {
      this.errorMessage()
    } else {
      this.callApi(`name/${this.state.searchValue}`)
    }
  }

  //calls restcountries api for data with 404 error check
  callApi = async (val) => {
    const link = 'https://restcountries.eu/rest/v2/' + val
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

  //UI styling for error from the api call
  errorMessage = () => {
    document.querySelector('.searchForm').style.border = "1px solid red"
    document.getElementById('searchContainer').classList.add("formAfter")
  }

  //turns off UI styling for api calls for error
  errorReset = () => {
    document.querySelector('.searchForm').style.border = "0"
    document.getElementById('searchContainer').classList.remove("formAfter")
  }

  //toggles on/off dark mode
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
      if (this.state.page === 'main') {
        document.getElementById('searchIcon').classList.add('searchIconLight')
        document.getElementById('searchIcon').classList.remove('searchIconDark')
        document.getElementById('regionIcon').classList.add('regionIconLight')
        document.getElementById('regionIcon').classList.remove('regionIconDark')
      }
      if (this.state.page === 'details') {
        document.getElementById('leftArrow').classList.add('leftArrowLight')
        document.getElementById('leftArrow').classList.remove('leftArrowDark')
      }
    } else if (this.state.isDark === false){
      document.documentElement.style.setProperty('--DarkElem', 'hsl(209, 23%, 22%)')
      document.documentElement.style.setProperty('--DarkBg', 'hsl(207, 26%, 17%)')
      document.documentElement.style.setProperty('--DarkText', 'hsl(0, 0%, 100%)')
      document.documentElement.style.setProperty('--DarkInput', '#000')
      document.getElementById('modeText').classList.add('moonDark')
      document.getElementById('modeText').classList.remove('moonLight')
      this.setState({
        isDark: true
      })
      if (this.state.page === 'main') {
        document.getElementById('searchIcon').classList.add('searchIconDark')
        document.getElementById('searchIcon').classList.remove('searchIconLight')
        document.getElementById('regionIcon').classList.add('regionIconDark')
        document.getElementById('regionIcon').classList.remove('regionIconLight')
      }
      if (this.state.page === 'details') {
        document.getElementById('leftArrow').classList.add('leftArrowDark')
        document.getElementById('leftArrow').classList.remove('leftArrowLight')
      }
    } 
  }

  //toggles on/off light mode icons across both pages
  loadDayImages = () => {
    if (this.state.isDark === false) {
      if (this.state.page === 'details') {
        document.getElementById('searchIcon').classList.add('searchIconLight')
        document.getElementById('searchIcon').classList.remove('searchIconDark')
        document.getElementById('regionIcon').classList.add('regionIconLight')
        document.getElementById('regionIcon').classList.remove('regionIconDark')
      } else if (this.state.page === 'main') {
        document.getElementById('leftArrow').classList.add('leftArrowLight')
        document.getElementById('leftArrow').classList.remove('leftArrowDark')
      }
    }
  }

  //adjusts the state to the name of the page user is on
  changeStatePage = (name) => {
    this.setState({
      page: name
    })
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
                                                    loadDayImages={this.loadDayImages}
                                                    callApi={this.callApi} />} />                              
          <Route path='/details' component={Details} />
        </Switch>
      </div>
    )
  }
}

export default App
