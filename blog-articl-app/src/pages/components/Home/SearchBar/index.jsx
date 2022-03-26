import React from 'react'
import './styles.css'
const SearchBar = ({ value, handleSearchkey, clearSearch, formSubmit }) => {
  return (
    <div className='searchBar-wrap'>
        <form>
            <input 
            type = 'text' 
            onChange={handleSearchkey}
            placeholder='Search by category' 
            value={value}>
            </input>
            {value && <span onClick= {clearSearch}>x</span>}
            <button>GO</button>
        </form>
        
    </div>
  )
}

export default SearchBar