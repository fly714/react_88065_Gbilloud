import { useLocation, Outlet, Link } from "react-router-dom"
import Logo from '../components/elements/Logo.jsx'
import CartWidget from '../components/elements/CartWidget.jsx'



function Layout() {

    const loc = useLocation();
    console.log("[ROUTE]", loc.pathname);

  return (
    <div className = 'opacity'>
        <header className='barHeader'>
            <div className='logoWrap'> 
                <Link to="/">
                  <Logo/>
                </Link>  
            </div>
         
            <nav className='navBar'>
                <Link to="/">Inicio</Link>
                <Link to="/nosotros">Nosotros</Link>
                <Link to="/contacto">Contacto</Link>
            </nav>

            <div className='cartWrap'>
                <CartWidget/>
            </div> 
        </header>

        <main>
            <Outlet/>
        </main>

        <footer style={{color: 'black' }}>
            © MateyTeCo
        </footer>
                
    </div>
  )         
}

export default Layout