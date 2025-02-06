
import EntryList from "./EntryList";
import Header from "./Header";
import "./TravelJournal.css"
function Traveljournal(){

return(
    <>
    <main className="traveljournal-main">
    <Header/>
        <div className="traveljournal-container">
        
        <EntryList />
        </div>
        </main>
    </>
)
}export default Traveljournal;