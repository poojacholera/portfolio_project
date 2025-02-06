import './App.css'
import Navbar from './Navbar';

function Header(){
return(
    <>
    <header className='home-header'>
        {/* <img src={reactLogo} width="40px" /> */}
        <span className='header-logo header-logo-pop'>Pooja Cholera</span>
        <Navbar />
    </header>
    </>
)
}export default Header;