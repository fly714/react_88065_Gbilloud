
import Logo from './Logo.jsx'
import Cartwidget from './Cartwidget.jsx'
import { Link } from 'react-router-dom'
import "../../App.css"

function Header() {
  return (

    <header className='barHeader'>
      <div> 
        <Link to="/">
          <Logo/>
        </Link>  
      </div>
 
      <nav className='navBar'>
            <ul>
                <li>
                    <Link className='menu' to={"/"}>Inicio</Link>
                </li>
                <li>
                    <Link className='menu' to={"/contacto"}>Contacto</Link>
                </li>
                <li>
                    <Link className='menu' to={"/nosotros"}>Nosotros</Link>
                </li>
            </ul>
        </nav>
        
      
      <Cartwidget/>
    </header>
    
  );
}

export default Header