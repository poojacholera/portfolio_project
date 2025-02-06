import "./MemeGenerator.css"
import trollFace from "../assets/troll-face.png"
import Navbar from "../Navbar";

function Header(){

    return(
        <>
         <header className="memegenerator-header">
            <img 
                src={trollFace} 
            />
            <h1>Meme Generator</h1>
            <Navbar />
        </header>
        </>
    )
}export default Header;