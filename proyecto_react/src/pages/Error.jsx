import NoFound from '../assets/NoFound.jpg' 

function Error() {
  const style = {
    color: "red",
    fontSize: "50px",

  }
  return (
    <>
      <h2 style={style}>ERROR 404!!</h2>
      <p style={style}>La direccion que buscas no existe</p>
      <img src= {NoFound} alt="error 404"/>
    </>
  )
}

export default Error