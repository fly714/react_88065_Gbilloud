import React from 'react'
import {Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './layouts/Layout.jsx'
import Home from './pages/Home.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Contacto from './pages/Contacto.jsx'
import Error404 from './pages/Error.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='nosotros' element={<Nosotros/>}/>
          <Route path='contacto' element={<Contacto/>}/>
          <Route path='*' element={<Error404/>}/>
        </Route>
      </Routes>
      <ToastContainer />
    </> 
      
  )
}

export default App
