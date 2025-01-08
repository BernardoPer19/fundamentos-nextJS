import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
        <nav>
            <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/tienda">Tienda</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/post">posts</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar