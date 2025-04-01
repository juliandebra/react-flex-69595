import React, { useEffect, useState } from 'react'
import fetchData from '../services/fetchData'

const ItemListContainer = ({ greeting }) => {
  const [list, setList] = useState([])
  console.log('Se renderizó itemlistcontainer')

  useEffect(() => {
    fetchData().then(res => {
      console.log(res)
      setList(res)
    })
  }, [])
  //   const mapList = list.map(item => {
  //     // console.log(item)
  //     return (
  //       <div>
  //         <h3>{item.name}</h3>
  //       </div>
  //     )
  //   })
  //   console.log(mapList)
  return (
    <div>
      <h1>{greeting}</h1>
      {list.map(item => (
        <div>
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default ItemListContainer
