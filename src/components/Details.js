import React from 'react'
import Arrow from '../img/arrow-left.svg'

export default function Details(props) {
  console.log(props.location.countryData)
  return (
    <div>
      <div className="backButtonContainer">
        <button className="backButton"><img className="leftArrow" src={Arrow} alt="left-arrow" />Back</button>
      </div>
    </div>
  )
}
