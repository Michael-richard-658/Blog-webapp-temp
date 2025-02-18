import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div>
      <div className='header'>
        <h1 className='header-title'><Link href={'/'} className='header-l'>Blogs</Link></h1>
        <div className='nav-cont'>
            <a href="/blogs" className='nav-1'>Blogs</a>
            <a href="/about" className='nav-2'>About</a>
            <a href="/contact" className='nav-3'>Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Header
