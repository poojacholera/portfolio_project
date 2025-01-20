import "./ChefDevi.css"
import bakerIcon from "../assets/baker.png"

function Header(){

    return(
        <>
            <header>
                <img className="header-image" src={bakerIcon}/>
                <h1 className="header-title">Chef Devi</h1>
            </header>
        </>
    )
}export default Header;