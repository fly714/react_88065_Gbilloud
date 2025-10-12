import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);

function CartProvider({ children }) {
  const [items, setItem] = useState(() => {
    try {
      const raw = localStorage.getItem('cartItems');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  }, [items]);

  const addItem = (product, qty = 1) => {
    setItem(prev => {
      const i = prev.findIndex(x => x.id === product.id);
      if (i >= 0) {
        const copy = [...prev];
        copy[i] = { ...copy[i], qty: copy[i].qty + qty };
        return copy;
      }
      const { id, nombre, precio, imagen } = product;
      return [...prev, { id, nombre, imagen, precio: Number(precio) || 0, qty }];
    });
  };

  const removeItem = (id) => {
    setItem(prev => prev.filter(i => i.id !== id));
  };

  const clear = () => setItem([]);

  const totalItems = useMemo(
    () => items.reduce((acc, i) => acc + i.qty, 0),
    [items]
  );

  const totalPrecio = useMemo(
    () => items.reduce((acc, i) => acc + (i.precio * i.qty), 0),
    [items]
  );

  const value = { items, addItem, removeItem, clear, totalItems, totalPrecio };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart debe usarse dentro de <CartProvider>');
  return ctx;
}

export default CartProvider;




