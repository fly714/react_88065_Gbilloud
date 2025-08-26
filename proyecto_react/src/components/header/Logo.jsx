import React from 'react'

function Logo({logo}) {
  return (
    <div>
      <img src={logo} alt="Logo del negocio" className='logo' />
    </div>
  )
}

export default Logo