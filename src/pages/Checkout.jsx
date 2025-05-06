import React, { useEffect, useState } from 'react'
import { useGlobalStates } from '../context/Context'
import { createOrder } from '../services/firebaseServices'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'
import { teal } from '@material-ui/core/colors'

const Checkout = () => {
  const { cart, calcularTotal } = useGlobalStates()
  const [user, setUser] = useState({
    name: '',
    email: '',
    tel: '',
  })
  const navigate = useNavigate()
  useEffect(() => {
    if (cart.length === 0) {
      navigate('/')
    }
  }, [])
  function handleChange(e) {
    console.log(e.target.name)
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  console.log(user)
  const handleSubmit = event => {
    event.preventDefault()
    let hasError = false

    console.log(hasError)
    let newOrder = {
      buyer: user,
      total: calcularTotal,
      items: cart,
      date: new Date(),
    }
    if (user.name.length < 5) {
      // setError('Nombre invalido')
      hasError = true
    }
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (!regexEmail.test(user.email)) {
      // setError('Email invalido')
      hasError = true
    }
    if (user.tel.length !== 10) {
      hasError = true
    }
    console.log(hasError)
    if (hasError) {
      Swal.fire({
        icon: 'error',
        title: 'Datos invalidos',
        text: 'Por favor, revise los datos ingresados.',
      })
      return
    }
    createOrder(newOrder)
      .then(res => {
        console.log(res)
        Swal.fire({
          title: 'Compra finalizada!',
          text: `Tu orden de compra es: ${res.id}`,
          icon: 'success',
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor=''>Nombre</label>
        <input type='text' name='name' onChange={handleChange} />
        {/* Muestra de error por cada input */}
        <label htmlFor=''>Email</label>
        <input type='email' name='email' onChange={handleChange} />
        {/* Muestra de error por cada input */}
        <label htmlFor=''>Telefono</label>
        <input type='text' name='tel' onChange={handleChange} />
        {/* Muestra de error por cada input */}
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default Checkout
