import React from 'react'
import { Link } from 'react-router'

const Item = ({ item }) => {
  return (
    <div className='card'>
      <h3>{item.name}</h3>
      <h4>Precio: ${item.price}</h4>
      <Link to={'/item/' + item.id}>Ver detalle</Link>
    </div>
  )
}

export default Item
