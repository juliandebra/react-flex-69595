import React, { useEffect, useState } from 'react'
import { fetchDataById } from '../services/fetchData'
import { useParams } from 'react-router'
import Counter from '../components/Counter'
import { useGlobalStates } from '../context/Context'
import Loader from '../components/Loader'

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({})
  const [counter, setCounter] = useState(0)
  const { cart, setCart, loading, setLoading } = useGlobalStates()
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    fetchDataById(id).then(res => {
      setDetail(res)
      setLoading(false)
    })
  }, [])

  const addCart = () => {
    setCart([...cart, { ...detail, quantity: counter }])
  }

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2>{detail.name}</h2>
          <p>{detail.description}</p>
          <h3>Stock: {detail.stock}</h3>
          <h3>Price: ${detail.price}</h3>
          <Counter
            stock={detail.stock}
            counter={counter}
            setCounter={setCounter}
          />
          <button onClick={addCart} disabled={counter == 0}>
            Agregar al carrito 🛒
          </button>
        </>
      )}
    </div>
  )
}

export default ItemDetailContainer
