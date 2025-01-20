import "./TravelJournal.css"
import markerIcon from "../assets/icons8-location-96.png";

function EntryCard(props){
    console.log(props);
return(
    <>
        <article className="journal-entry" id={props.id}>
                <div className="image-container">
                    <img  className="image" src={props.img.src} alt={props.imgAlt}/>
                </div>
                <div className="info-container">
                    <img className="marker" src={markerIcon} alt="Location Icon" />
                    <span className="country">{props.country}</span>
                    <a href={props.mapLink}>View on Google Maps</a>
                    <h2 className="entry-title">{props.title}</h2>
                    
                    <p className="trip-dates">{props.date}</p>
                    <p className="entry-text">{props.text}</p>
                
                </div>
               
            </article>
    </>
)
}export default EntryCard;