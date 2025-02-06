import "./ChefDevi.css"
import bakerIcon from "../assets/baker.png"
import Navbar from "../Navbar";

function Header(){

    return(
        <>
            <header className="chefDevi-header">
                <img className="header-image" src={bakerIcon}/>
                <h1 className="header-title">Chef Devi</h1>
                <Navbar />
            </header>
        </>
    )
}export default Header;