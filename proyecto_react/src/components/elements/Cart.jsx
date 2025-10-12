import { useCart } from "../elements/CartItems.jsx"
import { Link } from "react-router-dom"

function Cart() {
    const { cartItems, removeItem, clearCart, getTotalPrecio } = useCart();
    if (cartItems.length === 0) {
        return (
            <div>
                <h2>Tu carrito está vacío</h2>
                <Link to="/">Volver al inicio</Link>
            </div>
        );
    }
  return (
    <div>
        <h1>Carrito ({totalItems})</h1>
        <ul>
            {cartItems.map(item => (
                <li key={item.id}>
                    <img src={item.imagen} alt={item.nombre} width="50"/>
                    <div>
                        <div>{item.nombre}</div>
                        <small>
                            ${Number(item.precio).toFixed(2)} x {item.qty} 
                        </small>
                    </div>
                    <div>
                        ${(Number(item.precio) * item.qty).toFixed(2)}
                    </div>
                    <button onClick={() => removeItem(item.id)}>Eliminar</button>
                </li>
            ))}
        </ul>
        <div>
            <strong>Total: ${getTotalPrecio().toFixed(2)}</strong>
        </div>
        <div>
            <button onClick={clearCart}>Vaciar carrito</button>
            <button>Finalizar compra</button>
        </div>
    </div>
  )
}

export default Cart