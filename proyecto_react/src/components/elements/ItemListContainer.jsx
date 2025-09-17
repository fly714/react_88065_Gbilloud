
import { useState, useEffect } from 'react'
import Productos from './Productos.jsx'
import productos from './productos.js'


function ItemListContainer() {

  const [prod, setProd] = useState([]);
  const [categoria, setCategoria] = useState("todos");

  useEffect (()=>{
    const fetchProductos = new Promise ((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });

    fetchProductos.then((res) => setProd(res));
  },[]);

    const productosFiltrados = categoria === "Todos" ? 
      prod 
      : prod.filter((p) => p.categoria === categoria);
  return (
    <div className='itemListContainer'>
      <div>
        <button onClick={() => setCategoria("Todos")}>Todos los productos</button>
        <button onClick={() => setCategoria("Mates")}>Mates</button>
        <button onClick={() => setCategoria("Bombillas")}>Bombillas</button>
        <button onClick={() => setCategoria("Yerbas")}>Yerbas</button>
        <button onClick={() => setCategoria("Tes")}>Te & Inusiones</button>
        <button onClick={() => setCategoria("Termos")}>Termos</button>
      </div>
      <Productos prod={productosFiltrados}/>
    </div>
  );
}

export default ItemListContainer