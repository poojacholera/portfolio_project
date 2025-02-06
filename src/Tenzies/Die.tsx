import "./Tenzies.css"

function Die(props){
    const styles={
        backgroundColor:props.isHeld? '#8fE3EF' : "white" 
    }

    return(
        <>
            <button 
            className="die"
                style={styles}
                aria-pressed = {props.isHeld}
                aria-label={`Die with value ${props.value}, ${props.isHeld? "held":"not held"}`}
                onClick={props.hold}
                id={props.id}
            > 
                {props.value}
            </button>
         
        </>
    )
}export default Die;