import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
function CartProvider({children}) {
    const [items, setItem] = useState(()=>{
        try {
            const raw = localStorage.getItem('cartItems')
            return raw ? JSON.parse(raw) : []
        } catch  {
            return []
        }
    })

    useEffect(()=>{
        localStorage.setItem('cartItems', JSON.stringify(items))
    }, [items])
    const addItem = (product, qty=1) => {
        setItem(prev=>{
            const itemIndex = prev.findIndex(i => i.id === product.id)
            if (itemIndex >= 0) {
                const updatedItems = [...prev]
                updatedItems[itemIndex]={...updatedItems[itemIndex], qty: updatedItems[itemIndex].qty + qty}
                return updatedItems
            }
            const {id, nombre, precio, imagen} = product
            return [...prev, {id, nombre, precio: Number(precio) || imagen, qty}]
        })
    }
    const removeItem = (id) => {
        setItem((prev)=> prev.filter(i => i.id !== id))
    const clear = () => setItem([])
    const totalItems = useMemo(()=> items.reduce((acc, i) => acc + i.qty, 0), [items])
    const totalPrecio = useMemo(()=> items.reduce((acc, i) => acc + (i.precio * i.qty), 0), [items])
    const value = {items, addItem, removeItem, clear, totalItems, totalPrecio}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
    }
}    
export function useCart() {
    const context = useContext(CartContext)
    if (!context) throw new Error()
    return context  
}

export default CartProvider
    
