import React from 'react'

export default function Region(props) {
  return (
    <div className="regionContainer">
      <div className="regionForm">

        <div className="regionHeader" onClick={props.filter} >
          <p className="regionTitle">Filter by Region</p>
          <div className="regionIcon"></div>
        </div>

        <ul className="regionOptions">
          <li className="region africa" onClick={ ()=>props.filterSubmit('africa') }>Africa</li>
          <li className="region america" onClick={ ()=>props.filterSubmit('americas') }>America</li>
          <li className="region asia" onClick={ ()=>props.filterSubmit('asia') }>Asia</li>
          <li className="region europe" onClick={ ()=>props.filterSubmit('europe') }>Europe</li>
          <li className="region oceania" onClick={ ()=>props.filterSubmit('oceania') }>Oceania</li>
        </ul>
        
      </div>
    </div>
  )
}
