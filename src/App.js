import React, {Component} from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Region from './components/Region'
import './css/header.css'
import './css/search.css'
import './css/region.css'

class App extends Component {
  state = {
    isDark: false,
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Search />
        <Region />
      </div>
    )
  }
}

export default App;
