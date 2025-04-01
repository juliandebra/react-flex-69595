import React, { useState } from 'react'
import CartWidget from './CartWidget'

const Navbar = () => {
  console.log('Se renderizó navbar')
  const [cart, setCart] = useState(true)
  return (
    <header>
      <img src='/vite.svg' alt='logo' />
      <nav>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
      </nav>

      {cart ? <CartWidget /> : null}
      <button onClick={() => setCart(false)}>Cambiar estado</button>
    </header>
  )
}

export default Navbar
