import { Link } from 'react-router'

const CartWidget = () => {
  return (
    <div>
      <Link to='/cart'>
        🛒<span>0</span>
      </Link>
    </div>
  )
}

export default CartWidget
