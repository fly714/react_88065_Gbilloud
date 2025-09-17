
import Button from './Button.jsx'
import {toast} from 'react-toastify';

function MainButtons({producto}) {
  const handleClick = () => {
    console.log('Producto agregado al carrito', producto);
    toast.success(`${producto.nombre} agregado al carrito!`); 
  };

  return (
    <>
      <button onClick={handleClick}>Agregar al carrito</button>
    </>
  );
}

export default MainButtons