import React from 'react'

function Cartwidget({carrito}) {
  return (
    <div>
      <img src={carrito} alt="Carrito de compras" className='carrito'/>
    </div>
  )
}

export default Cartwidget