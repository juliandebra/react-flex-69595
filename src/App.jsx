import './App.css'
import ItemListContainer from './pages/ItemListContainer'
import Navbar from './components/Header/Navbar'
import { Route, Routes } from 'react-router'
import Contact from './pages/Contact'
import ItemDetailContainer from './pages/ItemDetailContainer'
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {
  return (
    <>
      <Navbar />
      {/* 
        //Ejemplo de children
      <Home algunValor='Algun texto'>
        <h1>Hola que tal</h1>
        <ul>
          <li>Elemento 1</li>
          <li>Elemento 2</li>
        </ul>
      </Home> */}
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/products/:category' element={<ItemListContainer />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='*' element={<h1>Page not Found - Error 404</h1>} />
      </Routes>
    </>
  )
}

export default App
