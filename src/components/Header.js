import React from 'react'

export default function Header(props) {
  return (
    <div id="headerContainer" className="headerContainer darkElem darkText darkBoxShadow">
      <h2 className="headerTitle">Where in the world?</h2>
      <p id="modeText" className="modeText moonDark"  tabindex="0" onClick={props.darkMode}>Dark Mode</p>
    </div>
  )
}
