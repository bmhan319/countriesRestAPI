import React, {Component} from 'react'
import Search from './Search'
import Region from './Region'
import Countries from './Countries'

class Main extends Component {
  state = {
    isDark: false,
    filterOpen: false,
    countries: [],
    searchValue: ""
  }

  handleSearchInput = (e) => {
    e.preventDefault()
    this.setState({
      searchValue: e.target.value
    })
  }

  handleInputSubmit = (e) => {
    e.preventDefault()
    this.callApi('name/', this.state.searchValue)
  }

  handleFilterSubmit = (region) => {
    document.querySelector('.regionOptions').style = "none"
    this.setState({
      filterOpen: false
    })
    this.callApi('region/', region)
  }

  callApi = async (type, val) => {
    const link = 'https://restcountries.eu/rest/v2/' + type + val
    const call = await fetch(link)
    const data = await call.json()
    this.setState({
      countries: data,
    })
    console.log(this.state.countries)
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

  componentDidMount() {
    this.callApi('all','')
  }

  render(){
    return (
      <div>
        <div className="inputContainer">
          <Search  inputSearch={this.handleSearchInput} inputSubmit={this.handleInputSubmit} />
          <Region filterSubmit={this.handleFilterSubmit} filter={this.filterExpand} />
        </div>
        <Countries state={this.state}/>
      </div>
    )
  }
}

export default Main
