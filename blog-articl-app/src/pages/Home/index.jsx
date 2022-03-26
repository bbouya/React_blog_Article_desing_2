import React from 'react'
import Header from '../components/Home/Header';
import SearchBar from '../components/Home/SearchBar';

const Home = () => {
  return (
    <div>
        {/* page Headere*/}
        <Header/>
        {/* Search bar */}
        <SearchBar/>
        {/* Blog list empty list */}
    </div>
  )
}

export default Home;
