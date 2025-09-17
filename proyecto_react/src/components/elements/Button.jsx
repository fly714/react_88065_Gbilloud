

function Button({onClick, children}) {
  return (
    <button className='boton' onClick={onClick}>{children}</button>
  )
}

export default Button