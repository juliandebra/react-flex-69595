import React from 'react'

const Home = props => {
  console.log(props)
  return (
    <div>
      {props.children}
      <img src='' alt='' />
      <h1>Mi página de productos</h1>
    </div>
  )
}

export default Home
