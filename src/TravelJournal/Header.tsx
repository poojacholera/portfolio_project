import "./TravelJournal.css";
import globeIcon from "../assets/icons8-globe-100.png"
import Navbar from "../Navbar";
function Header(){
    
return (
    <>
        <header>
            <img src={globeIcon} alt="globe icon" className="invert"/>
            <h1>My Travel Journal</h1>
            <Navbar />
        </header>
    </>
)
}export default Header;