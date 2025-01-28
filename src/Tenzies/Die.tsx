import "./Tenzies.css"

function Die(props){
    const styles={
        backgroundColor:props.isHeld? '#8fE3EF' : "white" 
    }

    return(
        <>
            <button 
                style={styles}
                aria-pressed = {props.isHeld}
                onClick={props.hold}
                id={props.id}
            >
                {props.value}
            </button>
        </>
    )
}export default Die;