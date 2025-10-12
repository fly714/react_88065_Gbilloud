import { NavLink, Outlet, Link } from "react-router-dom"
import Logo from '../components/elements/Logo.jsx'
import CartWidget from '../components/elements/CartWidget.jsx'

import { useLocation } from "react-router-dom";

function Layout() {

    const loc = useLocation();
    console.log("[ROUTE]", loc.pathname);

  return (
    <>
        <header className='barHeader'>
            <div> 
                <Link to="/">
                  <Logo/>
                </Link>  
            </div>
         
            <nav className='navBar'>
                <Link to="/">Inicio</Link>
                <Link to="/nosotros">Nosotros</Link>
                <Link to="/contacto">Contacto</Link>
            </nav>

            <div>
                <CartWidget/>
            </div> 
        </header>

        <main>
            <Outlet/>
        </main>

        <footer style={{color: 'black' }}>
            © MateyTeCo
        </footer>
                
    </>
    )         
}

export default Layout