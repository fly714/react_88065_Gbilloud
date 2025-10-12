
import {Routes, Route} from 'react-router-dom'
import Layout from './layouts/Layout.jsx'

import './App.css'

import Home from './pages/Home.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Contacto from './pages/Contacto.jsx'
import Productos from './components/elements/Productos.jsx'
import Error404 from './pages/Error.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Cart from './components/elements/Cart.jsx'



function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='productos' element={<Productos/>}/>
          <Route path='nosotros' element={<Nosotros/>}/>
          <Route path='contacto' element={<Contacto/>}/>
          <Route path='carrito' element={<Cart/>}/>
          <Route path='*' element={<Error404/>}/>
        </Route>
      </Routes>
      <ToastContainer />
    </> 
      
  )
}

export default App
