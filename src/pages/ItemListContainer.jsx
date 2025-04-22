import React, { useEffect, useState } from 'react'
import { fetchData } from '../services/fetchData'
import ItemList from '../components/ItemListContainer/ItemList'
import { useGlobalStates } from '../context/Context'
import Loader from '../components/Loader'

const ItemListContainer = () => {
  const { list, loading } = useGlobalStates()

  // Filtrado de productos por categoría

  return <div>{loading ? <Loader /> : <ItemList list={list} />}</div>
}

export default ItemListContainer
