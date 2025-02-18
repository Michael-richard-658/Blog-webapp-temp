"use client";
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      <Link href={'/writeblog'}> Write Blogs! </Link>
    </div>
  )
}

export default page
