import CartWidget from './CartWidget'
import { Link, useNavigate } from 'react-router'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <header>
      <img
        src='https://www.pngkey.com/png/full/313-3131874_blank-laptop-computer-screen-vector-laptop-computer-logo.png'
        alt='logo'
      />
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
      </nav>

      <CartWidget />
    </header>
  )
}

export default Navbar
