import "./TravelJournal.css";
import globeIcon from "../assets/icons8-globe-100.png"
import Navbar from "../Navbar";
function Header(){
    
return (
    <>
        <header className="traveljournal-header">
            <img src={globeIcon} alt="globe icon" className="traveljournal-header-img invert"/>
            <h1 className="traveljournal-header-name">My Travel Journal</h1>
            <Navbar />
        </header>
    </>
)
}export default Header;