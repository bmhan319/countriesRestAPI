import React, {Component} from 'react'
import Search from './Search'
import Region from './Region'
import Countries from './Countries'

class Main extends Component {
  componentDidMount() {
    window.onload = () => {
      this.props.callApi('all')
    }
    this.props.changeStatePage('main')
    this.props.loadDayImages()
  }
    
  render(){
    return (
      <div id="mainContainer" className="darkBg">
        <div className="inputContainer">
          <Search  inputSearch={this.props.handleSearchInput} inputSubmit={this.props.handleInputSubmit} />
          <Region filterSubmit={this.props.handleFilterSubmit} filter={this.props.filterExpand} />
        </div>
        <Countries  state={this.props.parentState}  callApi={this.props.callApi} changeStatePage={this.props.changeStatePage} loadDayImages={this.props.loadDayImages}/>
      </div>
    )
  }
}

export default Main
