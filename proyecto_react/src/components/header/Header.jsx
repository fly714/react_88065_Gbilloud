import React from 'react'
import Navbar from './Navbar.jsx'
import Logo from './Logo.jsx'
import Cartwidget from './Cartwidget.jsx'
import carrito from '../../assets/carrito.png'
import logo from '../../assets/logo.png'


function Header() {
  return (
    <div className='navbar'>
      <Logo logo={logo}/>

      <Navbar menu="Inicio"/>
      <Navbar menu="Productos"/>
      <Navbar menu="Ofertas/Promociones"/>
      <Navbar menu="Contacto"/>
      <Navbar menu="Nosotros"/>

      
      <Cartwidget carrito={carrito}/> 
      
    </div>
  )
}

export default Header