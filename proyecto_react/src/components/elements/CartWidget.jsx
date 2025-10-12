import {Link} from 'react-router-dom'
import carrito from '../../assets/carrito.png'
import {useCart} from '../elements/CartItems.jsx'

function CartWidget() {
  const { cartItems } = useCart();
  
  return (
    <Link to="/carrito">
        <img src={carrito} alt="Icono de carrito de compras" className='carrito'/>
        {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
    </Link>
  )
}

export default CartWidget