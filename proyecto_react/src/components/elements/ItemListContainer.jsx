
import { useState, useEffect } from 'react'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import {useCart} from './CartItems.jsx'

function ItemListContainer({categoria}) {
 
  const db = getFirestore();
  const {addItem} = useCart();
  
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect (()=>{
    let alive = true;

    (async () =>{
      setLoading(true);
      setError(null);
      try {
        const baseRef = collection(db, 'productos');
        const ref = categoria && categoria !== 'Todos' ?
          query(baseRef, where('categoria', '==', categoria)) 
          : baseRef;
        
        const snapshot = await getDocs(ref);
        const data = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
        if (alive) setProductos(data);
      } catch (err) {
        if (alive) setError(err.message);
      } finally {
        if (alive) setLoading(false);
      }
    })();
   

    return () => { alive = false; }
  }, [db, categoria]);

  if (loading) return <p>Cargando productos...</p>
  if (error) return <p>Error: {error}</p>
  if (!productos.length) return <p>No hay productos disponibles.</p>
    
 return (
    <div className="gridCards">
    {productos.map((p) => {
      const srcImg = p.imagen
        ? new URL(`../../assets/${p.imagen}`, import.meta.url).href
        : new URL(`../../assets/placeholder.png`, import.meta.url).href;
      
      return (
        <article key={p.id} className="card">
          <div className="imgWrap">
            <img src={srcImg} alt={p.nombre || "Producto"} loading="lazy" />
          </div>

          <div className="cardBody">
            <h2 className="cardTitle">{p.nombre ?? "Sin nombre"}</h2>
            {p.caracteristica && (
              <p className="cardDesc">{p.caracteristica}</p>
            )}

            <div className="cardFooter">
              <span className="price">
                ${Number(p.precio ?? 0).toLocaleString()}
              </span>
              <button className="btnPrimary" type="button" onClick={() => addItem(p, 1)}>
                Agregar al carrito
              </button>
            </div>
          </div>
        </article>
      );
    })}
    </div>
  );
  }


export default ItemListContainer