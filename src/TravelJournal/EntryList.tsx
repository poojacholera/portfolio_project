//import { useState } from "react";
import "./TravelJournal.css"

import EntryCard from "./EntryCard";
import locationsData from "./data";

function EntryList(){

       // const [location, setLocation] =useState([]);
    //   const locations= [...data];
    //console.log(locationsData);

       const entryCardElement =locationsData.map((l)=>
         {  return <EntryCard  
                        key={l.id}
                        id={l.id}
                        {...l}
                        //img={l.img.src}
                        //imgAlt={l.img.alt}
                        //country={l.country}
                       // mapLink={l.googleMapsLink}
                       // title={l.title}
                       // date={l.dates}
                       // text={l.text}
                    />
        })
return(
        <>
            <div className="locations-container">
                {entryCardElement}
            </div>
        
        </>
)
}export default EntryList;

/**
 
 <article className="journal-entry">
                <div className="image-container">
                    <img  className="image" src="https://scrimba.com/links/travel-journal-japan-image-url" alt="Mount Fuji"/>
                </div>
                <div className="info-container">
                    <img className="marker" src={markerIcon} alt="Location Icon" />
                    <span className="country">Japan</span>
                    <a href="https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9">View on Google Maps</a>
                    <h2 className="entry-title">Mount Fuji</h2>
                    
                    <p className="trip-dates">12 Jan, 2021 - 24 Jan, 2021</p>
                    <p className="entry-text">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                
                </div>
               
            </article>



 * 
 */