import React, {Component} from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Region from './components/Region'
import Countries from './components/Countries'
import './css/header.css'
import './css/search.css'
import './css/region.css'
import './css/countries.css'

class App extends Component {
  state = {
    isDark: false,
    filterOpen: false,
    countries: []
  }

  callApi = async (region) => {
    const link = 'https://restcountries.eu/rest/v2/' + region
    const call = await fetch(link)
    const data = await call.json()
    this.setState({
      countries: data
    })
    console.log(this.state)
  }

  filter = () => {
    if (this.state.filterOpen === false) {
      document.querySelector('.regionOptions').style.display="block"
      this.setState({
        filterOpen: true
      })
    } else {
      document.querySelector('.regionOptions').style.display="none"
      this.setState({
        filterOpen: false
      })
    }
  }

  componentDidMount() {
    this.callApi('all')
  }

  render(){
    return (
      <div className="App">
        <Header />
        <div className="inputContainer">
          <Search />
          <Region call={this.callApi} filter={this.filter} />
        </div>
        <Countries state={this.state}/>
      </div>
    )
  }
}

export default App;
