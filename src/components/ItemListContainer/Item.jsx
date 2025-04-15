import React from 'react'
import { Link } from 'react-router'

const Item = ({ item }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <h4>{item.price}</h4>
      <Link to={'/item/' + item.id}>Ver detalle</Link>
    </div>
  )
}

export default Item
