import React, { useState } from 'react'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <header>
      <img src='/vite.svg' alt='logo' />
      <nav>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
      </nav>

      <CartWidget />
    </header>
  )
}

export default Navbar
