import './App.css'
import FetchExample from './components/FetchExample'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      {/* <ItemListContainer greeting='Mi texto de bienvenida' /> */}
      <FetchExample />
    </>
  )
}

export default App
