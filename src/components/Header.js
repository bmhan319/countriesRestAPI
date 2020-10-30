import React from 'react'

export default function Header(props) {
  return (
    <div className="headerContainer">
      <h2 className="headerTitle">Where in the world?</h2>
      <p className="modeText" onClick={props.darkMode}>Dark Mode</p>
    </div>
  )
}
