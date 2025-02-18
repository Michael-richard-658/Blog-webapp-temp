"use client";
import axios from 'axios';
import Link from 'next/link'
import React, { useEffect } from 'react'

function page() {
  useEffect(()=>{
      getBlogs()
   

  },[])
  async function getBlogs() {
    try {
        const response = await axios.get('http://localhost:3000/api/writeblog')
        console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <Link href={'/writeblog'}> Write Blogs! </Link>
    </div>
  )
}

export default page
