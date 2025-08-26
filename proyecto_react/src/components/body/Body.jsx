import React from 'react'
import ItemListContainer from './ItemListContainer'
function Body() {
  return (
    <div>
        <h1>Mate & Tea Co.</h1>
        <ItemListContainer producto="Mate Imperial Algarrobo" precio="15000"/>
        <ItemListContainer producto="Mate Camionero Algarrobo" precio="14000"/>  
        <ItemListContainer producto="Mate Torpedo Algarrobo" precio="20000"/>
        <ItemListContainer producto="Bombilla Pico Loro Acero" precio="9000"/>
    </div>
  )
}

export default Body