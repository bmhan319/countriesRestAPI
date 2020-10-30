import React from 'react'

export default function Search(props) {
  return (
    <div id="searchContainer" className="searchContainer">
      <form id="searchForm" className="searchForm darkSearchForm darkElem darkBoxShadow" onSubmit={ props.inputSubmit }>
        <div id="searchIcon" className="searchIcon searchIconDark"></div>
        <input id="searchInput" className="searchInput darkSearchInput darkElem darkText" placeholder="Search for a country..." type="text" name="query" onChange={ props.inputSearch } />
      </form>
    </div>
  )
}
