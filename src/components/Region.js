import React from 'react'

export default function Region() {
  return (
    <div className="regionContainer">
      <div className="regionForm">

        <div className="regionHeader">
          <p className="regionTitle">Filter By Region</p>
          <div className="regionIcon"></div>
        </div>

        <ul className="regionOptions">
          <li className="region africa">Africa</li>
          <li className="region america">America</li>
          <li className="region asia">Asia</li>
          <li className="region europe">Europe</li>
          <li className="region oceania">Oceania</li>
        </ul>
        
      </div>
    </div>
  )
}
