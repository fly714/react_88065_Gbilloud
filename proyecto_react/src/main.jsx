import React from 'react'
import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './components/elements/CartItems.jsx'
import './index.css'
import App from './App.jsx'



import {initializeApp, getApps} from 'firebase/app'


const firebaseConfig = {
  apiKey: "AIzaSyDSNfVxNnUDgAf0E6Uo9ozM9FsA2MlRW_o",
  authDomain: "mateyteco.firebaseapp.com",
  projectId: "mateyteco",
  storageBucket: "mateyteco.firebasestorage.app",
  messagingSenderId: "1056623116731",
  appId: "1:1056623116731:web:2b80c42e3019a37ba6449e"
};

if (!getApps().length) {
  initializeApp(firebaseConfig)
} 


ReactDom.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <CartProvider>
        <App/>
      </CartProvider>
    </BrowserRouter>
  </>
)
