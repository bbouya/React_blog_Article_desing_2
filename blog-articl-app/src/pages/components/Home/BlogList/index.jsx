import React from 'react'
import './styles.css'
import BlogItem from './BlogItem'

const Blogist = ({blogs}) => {
  return (
    <div className='blogList-wrap'> 
        {blogs.map(blog=><BlogItem blog = {blog} key={blog.id}/>)}
    </div>
  )
}

export default Blogist