import React, {Component} from 'react'
import Header from './components/Header'
import './css/header.css'

class App extends Component {
  state = {
    isDark: false,
  }

  render(){
    return (
      <div className="App">
        <Header />
      </div>
    )
  }
}

export default App;
