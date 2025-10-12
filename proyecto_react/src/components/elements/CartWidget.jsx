import {Link} from 'react-router-dom'
import carrito from '../../assets/carrito.png'
import {useCart} from './CartItems.jsx'

function CartWidget() {
  const { items } = useCart();
  
  return (
    <Link to="/carrito">
        <img src={carrito} alt="Icono de carrito de compras" className='carrito'/>
        {items.length > 0 && <span className="cart-count">{items.length}</span>}
    </Link>
  )
}

export default CartWidget