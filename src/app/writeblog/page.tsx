"use client";
import React, { useState } from 'react'
import './writeblog.css'
import axios from 'axios';

function page() {

    const [title,setTitle] = useState('')
    const [blog,setBlog] = useState('')


  async  function submitBlog(){
        if (title.trim().length > 0 && blog.trim().length > 0 ) {
            const blogObj = {
             
                title:title,
                content:blog
            }
            const response = await axios.post('http://localhost:3000/api/writeblog',blogObj)
            if (response.data.success) {
                setTitle('')
                setBlog('')
            }
        }
    }

  return (
    <div className={title.trim().length > 0 && blog.trim().length > 0 ? 
        "writeblog-but" : "writeblog"
    }>
        <div className='input-cont'>
      <input type="text" placeholder="Title . . ." className='title' 
        value={title} onChange={e => setTitle(e.target.value)}
      />
      <select className='genre'>
  <option value="">Select Genre</option>
  <option value="action">Action</option>
  <option value="adventure">Adventure</option>
  <option value="comedy">Comedy</option>
  <option value="drama">Drama</option>
  <option value="fantasy">Fantasy</option>
  <option value="horror">Horror</option>
  <option value="mystery">Mystery</option>
  <option value="romance">Romance</option>
  <option value="sci-fi">Sci-Fi</option>
  <option value="thriller">Thriller</option>
</select>
        </div>
        <textarea name="blog"  className='blog-input' placeholder='Your Blog Here!' 
            value={blog} onChange={e => setBlog(e.target.value)}
        />
        {title.trim().length > 0 && blog.trim().length > 0 && <button onClick={submitBlog} className='post-but'> Post!</button>}
    </div>
  )
}

export default page
