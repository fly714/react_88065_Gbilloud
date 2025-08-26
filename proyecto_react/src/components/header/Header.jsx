import React from 'react'
import Navbar from './Navbar.jsx'
import Logo from './Logo.jsx'
import Cartwidget from './Cartwidget.jsx'
import carrito from '../../assets/carrito.png'
import logo from '../../assets/logo.png'


function Header() {
  return (
    <div className='barHeader'>
      <Logo logo={logo}/>
      <div className='navbar'>
        <Navbar menu="Inicio"/>
        <Navbar menu="Productos"/>
        <Navbar menu="Ofertas/Promociones"/>
        <Navbar menu="Contacto"/>
        <Navbar menu="Nosotros"/>
      </div>
      <Cartwidget carrito={carrito}/>
    </div>
  )
}

export default Header