import React from 'react'
import Blogist from '../components/Home/BlogList';
import BlogItem from '../components/Home/BlogList/BlogItem';
import Header from '../components/Home/Header';
import SearchBar from '../components/Home/SearchBar';
import { blogList } from '../config/data';

const Home = () => {
  return (
    <div>
        {/* page Headere*/}
        <Header/>
        {/* Search bar */}
        <SearchBar/>
        {/* Blog list empty list */}
        <Blogist blogs={blogList}/>
    </div>
  )
}

export default Home;
