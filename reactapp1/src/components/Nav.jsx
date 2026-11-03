import logo from '../assets/logo.png'
import './Nav.css'
import {Link} from 'react-router'

export default function Nav(){

    return(
          <nav className="navBar">
               <img src={logo} alt="logo" className="logo"/>
            
            <ul className="topMenu"> 
                 <Link className="links" to="/">
                    Home
                 </Link>
                 <Link className="links" to="/services">
                    Services
                 </Link>
                 <Link className="links" to="/signup">
                    Sign Up
                 </Link>
            </ul>
          </nav>
    )
}