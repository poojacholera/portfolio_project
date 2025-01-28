import './App.css'
import Navbar from './Navbar';
import reactLogo from './assets/react.svg'

function Header(){
return(
    <>
    <header className='header layered'>
        {/* <img src={reactLogo} width="40px" /> */}
        <span className='logo nav-logo '>Pooja Cholera</span>
        <Navbar />
    </header>
    </>
)
}export default Header;