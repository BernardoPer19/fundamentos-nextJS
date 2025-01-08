import Link from 'next/link'
import React from 'react'

function notFound() {
  return (
    <div>
      <h1>404</h1>
      <h2>no found</h2>
      <p>no se encontro la pagina!</p>
      <Link href={"/"}>Volver</Link>
    </div>
  )
}

export default notFound
