import CartWidget from './CartWidget'
import { Link, useNavigate } from 'react-router'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <header>
      <img src='/vite.svg' alt='logo' />
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
      </nav>

      <CartWidget />
    </header>
  )
}

export default Navbar
