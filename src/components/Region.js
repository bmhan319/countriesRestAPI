import React from 'react'

export default function Region(props) {
  return (
    <div className="regionContainer">
      <div id="regionForm" className="regionForm" tabIndex="0" onKeyUp={props.regionKeyBoard}>

        <div id="regionHeader" className="regionHeader darkElem darkText darkBoxShadow" onClick={props.filter} >
          <p className="regionTitle">Filter by Region</p>
          <div id="regionIcon" className="regionIcon regionIconDark"></div>
        </div>

        <ul id="regionOptions" className="regionOptions darkElem darkText darkBoxShadow">
          <li className="region all" onClick={ ()=>props.filterSubmit('all') }>All</li>
          <li className="region africa" onClick={ ()=>props.filterSubmit('region/africa') }>Africa</li>
          <li className="region america" onClick={ ()=>props.filterSubmit('region/americas') }>America</li>
          <li className="region asia" onClick={ ()=>props.filterSubmit('region/asia') }>Asia</li>
          <li className="region europe" onClick={ ()=>props.filterSubmit('region/europe') }>Europe</li>
          <li className="region oceania" onClick={ ()=>props.filterSubmit('region/oceania') }>Oceania</li>
        </ul>
        
      </div>
    </div>
  )
}
