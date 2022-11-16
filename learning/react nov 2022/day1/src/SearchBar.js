import React from 'react'

const SearchBar = ({setSearch,handleSearch}) => {
  return (
    <div>
        <form>
            <input placeholder="Press any key to search" type="text" onChange={(e)=>{setSearch(e.target.value);handleSearch(e)}} />
        </form>
    </div>
  )
}

export default SearchBar