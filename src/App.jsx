import './App.css'
import ItemListContainer from './pages/ItemListContainer'
import Navbar from './components/Header/Navbar'
import { Route, Routes } from 'react-router'
import Contact from './pages/Contact'
import ItemDetailContainer from './pages/ItemDetailContainer'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:category' element={<ItemListContainer />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<h1>Page not Found - Error 404</h1>} />
      </Routes>
    </>
  )
}

export default App
