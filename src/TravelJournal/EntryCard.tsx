import "./TravelJournal.css"
import markerIcon from "../assets/icons8-location-96.png";
type LocationItem = {
    id: number;
    img: {src:string, alt:string},
    title:string,
    country: string,
    googleMapsLink: string,
    dates:string,
    text: string
  };
function EntryCard(props :LocationItem){
    // console.log(props);
return(
    <>
        <article className="journal-entry" id={props.id.toString()}>
                <div className="image-container">
                    <img  className="image" src={props.img.src} alt={props.img.alt}/>
                </div>
                <div className="info-container">
                    <img className="marker" src={markerIcon} alt="Location Icon" />
                    <span className="country">{props.country}</span>
                    <a href={props.googleMapsLink}>View on Google Maps</a>
                    <h2 className="entry-title">{props.title}</h2>
                    
                    <p className="trip-dates">{props.dates}</p>
                    <p className="entry-text">{props.text}</p>
                
                </div>
               
            </article>
    </>
)
}export default EntryCard;