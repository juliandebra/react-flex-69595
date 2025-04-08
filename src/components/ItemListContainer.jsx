import React, { useEffect, useState } from 'react'
import fetchData from '../services/fetchData'
import ItemList from './ItemList'

const ItemListContainer = ({ greeting }) => {
  const [list, setList] = useState([])

  useEffect(() => {
    fetchData().then(res => {
      console.log(res)
      setList(res)
    })
  }, [])

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList list={list} />
    </div>
  )
}

export default ItemListContainer
