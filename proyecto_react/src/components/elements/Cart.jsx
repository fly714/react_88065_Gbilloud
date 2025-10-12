import { useCart } from "./CartItems.jsx";
import { Link, useNavigate } from "react-router-dom";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { useState } from "react";

function Cart() {
  const { items, removeItem, clear, totalItems, totalPrecio } = useCart();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const db = getFirestore();

  if (items.length === 0) {
    return (
      <div>
        <h2>Tu carrito está vacío</h2>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  const handleCheckout = async () => {
    try {
      setLoading(true);

      const order = {
        createdAt: serverTimestamp(),
        items: items.map(i => ({
          id: i.id,
          nombre: i.nombre,
          precio: Number(i.precio) || 0,
          qty: i.qty,
        })),
        totalItems,
        totalPrecio: Number(totalPrecio.toFixed(2)),
      };

      const ref = await addDoc(collection(db, "orders"), order);

      toast.success(`¡Compra realizada! N° de orden: ${ref.id}`, { autoClose: 3500 });
      clear();
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("No se pudo finalizar la compra. Probá de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const imgSrc = (img) =>
    typeof img === "string" && !/^https?:|^data:|^blob:/.test(img)
      ? new URL(`../../assets/${img}`, import.meta.url).href
      : img;

  return (
    <div>
      <h1>Carrito ({totalItems})</h1>
      <ul>
        {items.map(item => (
          <li key={item.id} style={{ display: "grid", gridTemplateColumns: "60px 1fr auto auto", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <img src={imgSrc(item.imagen)} alt={item.nombre} width="50" height="50" style={{ objectFit: "cover", borderRadius: 6 }} />
            <div>
              <div>{item.nombre}</div>
              <small>${Number(item.precio).toFixed(2)} x {item.qty}</small>
            </div>
            <div style={{ fontWeight: 700 }}>
              ${(Number(item.precio) * item.qty).toFixed(2)}
            </div>
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 16 }}>
        <strong>Total: ${totalPrecio.toFixed(2)}</strong>
      </div>

      <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
        <button onClick={clear} disabled={loading}>Vaciar carrito</button>
        <button onClick={handleCheckout} disabled={loading}>
          {loading ? "Procesando..." : "Finalizar compra"}
        </button>
      </div>
    </div>
  );
}

export default Cart;
