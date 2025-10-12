# Mate & Té Co. — Tienda React

Proyecto realizado como práctica de desarrollo en React.  
Se trata de una aplicación web que simula una tienda online de productos relacionados con el mate y el té (mates, bombillas, yerbas, tés, termos, etc.).

El usuario puede:
- Navegar entre secciones de la tienda: Inicio, Productos, Nosotros, Contacto.
- Ver los productos organizados por categorías.
- Agregar productos al carrito de compras.
- Ver, eliminar o vaciar los productos del carrito.
- Finalizar la compra (simulado).
- Navegar con rutas limpias gracias a React Router.

---

## 🚀 Tecnologías utilizadas

- **[React](https://react.dev/)** — Biblioteca principal para construir la interfaz.
- **[Vite](https://vitejs.dev/)** — Bundler rápido para el entorno de desarrollo.
- **[React Router DOM](https://reactrouter.com/)** — Manejo de rutas y navegación.
- **[Firebase Firestore](https://firebase.google.com/)** — Base de datos para los productos.
- **[React Toastify](https://fkhadra.github.io/react-toastify/)** — Notificaciones amigables.
- **CSS** — Estilos personalizados para layout, tarjetas de productos, botones y carrito.

src/
├── App.jsx
├── main.jsx
├── layouts/
│ └── Layout.jsx
├── components/
│ └── elements/
│ ├── CartItems.jsx # Contexto del carrito
│ ├── CartWidget.jsx # Ícono carrito con contador
│ ├── Cart.jsx # Página de carrito
│ ├── Productos.jsx # Página productos
│ ├── ItemListContainer.jsx
│ ├── MainButtons.jsx # Filtros por categoría
│ ├── Logo.jsx
│ └── Button.jsx
├── pages/
│ ├── Home.jsx
│ ├── Nosotros.jsx
│ ├── Contacto.jsx
│ └── Error.jsx
└── assets/ # Imágenes y recursos