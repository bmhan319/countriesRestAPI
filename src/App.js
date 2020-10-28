import React, {Component} from 'react'
import Header from './components/Header'
import Search from './components/Search'
import './css/header.css'
import './css/search.css'

class App extends Component {
  state = {
    isDark: false,
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Search />
      </div>
    )
  }
}

export default App;
