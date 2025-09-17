import MainButtons from "./MainButtons";


function Productos({prod}) {
 
  return (
    <div className='product'>
      {prod.map((p) => (
        <div key={p.id}>

          <h2>{p.nombre}</h2>
          <p>{p.caracteristica}</p>
          <h3>${p.precio}</h3>
          <img className= 'imagenes' src={p.imagen} alt={p.nombre}/>
            <div>
              <MainButtons producto={p} />
              
            </div>
        </div>
      ))}
    </div>
  );
}
export default Productos