import './Navbar.css'
import { NavLink } from "react-router";

function Navbar(){
    return(
        <>
        <nav className='navbar'>
            <ul className='nav-list'>
                <li >   
                    <NavLink to="/" className='nav-list-item' end>
                        Home
                    </NavLink>
                 </li>
                <li className='nav-list-item'>
                    <NavLink  to="/TravelJournal" >
                        TravelJournal
                    </NavLink>
                </li>
                <li className='nav-list-item'>
                    <NavLink to="/ChefDevi"  >
                    ChefDevi
                    </NavLink>
                </li>
                <li className='nav-list-item'>
                    <NavLink to="/MemeGenerator"  >
                    MemeGenerator
                    </NavLink>
                </li>
                <li className='nav-list-item'>
                    <NavLink to="/Tenzies"  >
                    Tenzies
                    </NavLink>
                </li>
            </ul>
        </nav>
        </>
    )
}export default Navbar;