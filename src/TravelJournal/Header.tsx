import "./TravelJournal.css";
import globeIcon from "../assets/icons8-globe-100.png"
function Header(){
    
return (
    <>
        <header>
            <img src={globeIcon} alt="globe icon" className="invert"/>
            <h1>My Travel Journal</h1>
        </header>
    </>
)
}export default Header;