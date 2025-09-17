
import ItemListContainer from '../components/elements/ItemListContainer.jsx'


function Body() {
  return (
    <div className='containerBody'>
      <div className='body'>
          <h1>Mate & Tea Co.</h1>
          <h2>Bienvenidos a nuestra tienda</h2>
          <p>Aquí encontrarás una selección de los mejores productos para disfrutar del mate y el té.</p>
          <p>Navega por nuestras categorías y descubre ofertas exclusivas.</p>
          <ItemListContainer/>
      </div>
    </div>
  )
}

export default Body