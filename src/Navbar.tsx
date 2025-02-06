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
                <li>
                    <NavLink  to="/TravelJournal" className='nav-list-item' >
                        TravelJournal
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/ChefDevi" className='nav-list-item' >
                    ChefDevi
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/MemeGenerator" className='nav-list-item' >
                    MemeGenerator
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Tenzies" className='nav-list-item' >
                    Tenzies
                    </NavLink>
                </li>
            </ul>
        </nav>
        </>
    )
}export default Navbar;