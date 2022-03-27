import React from 'react'
import './styles.css'

const BlogItem = ({blog:{id,description,title,createAt,authorName, authorAvatar, category, cover},}) => {
  return (
    <div className='blogItem-wrap'>
        <img src={cover} alt="cover"/>
    </div>
  )
}

export default BlogItem