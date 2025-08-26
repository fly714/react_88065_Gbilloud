import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './components/body/Body.jsx'
import Header from './components/header/Header.jsx'

function App() {
  
  return (
    <>
      <Header/>
      <Body/>
        
      
      {/*<div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>*/}
      
    </>
  )
}

export default App
