import React from 'react'

export default function Region(props) {
  return (
    <div className="regionContainer">
      <div className="regionForm">

        <div className="regionHeader" onClick={props.filter} >
          <p className="regionTitle">Filter By Region</p>
          <div className="regionIcon"></div>
        </div>

        <ul className="regionOptions">
          <li className="region africa" onClick={ ()=>props.call('region/africa') }>Africa</li>
          <li className="region america" onClick={ ()=>props.call('region/americas') }>America</li>
          <li className="region asia" onClick={ ()=>props.call('region/asia') }>Asia</li>
          <li className="region europe" onClick={ ()=>props.call('region/europe') }>Europe</li>
          <li className="region oceania" onClick={ ()=>props.call('region/oceania') }>Oceania</li>
        </ul>
        
      </div>
    </div>
  )
}
