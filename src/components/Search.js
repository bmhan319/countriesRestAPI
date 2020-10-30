import React from 'react'

export default function Search(props) {
  return (
    <div id="searchContainer" className="searchContainer">
      <form id="searchForm" className="searchForm" onSubmit={ props.inputSubmit }>
        <div className="searchIcon"></div>
        <input className="searchInput" placeholder="Search for a country..." type="text" name="query" onChange={ props.inputSearch } />
      </form>
    </div>
  )
}
