import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Details from './components/Details'
import './css/header.css'
import './css/details.css'
import './css/search.css'
import './css/region.css'
import './css/countries.css'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/details' component={Details} />
      </Switch>
    </div>
  )
}
