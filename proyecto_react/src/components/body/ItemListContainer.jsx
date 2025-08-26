import React from 'react'

function ItemListContainer({producto, precio}) {
  return (
    <div>
        <h2>{producto}</h2>
        <p>Precio: ${precio}</p>
    </div>
  )
}

export default ItemListContainer