import { useState } from "react";
import Navbar from "../Navbar";
import Die from "./Die";
import "./Tenzies.css"
import { nanoid } from "nanoid";


function Tenzies(){

    const [dice,setDice] = useState(generateAllNewDice()); 
    const rollDice = () =>{
        setDice(prevDice => prevDice.map(die => 
                die.isHeld == true ? 
                die : 
                {...die, value:Math.ceil(Math.random() * 6)}
            ))
    }  
    function generateAllNewDice(){
        return new Array(10)
                .fill(0)
                .map(()=> ({
                    value : Math.ceil(Math.random() * 6),
                     isHeld : false,
                     id:nanoid()
                    }))
    }
    const hold = (id) =>{
        //console.log(id);
        setDice(prevDice => prevDice.map(die => 
            die.id == id ? 
                {...die, isHeld: !die.isHeld}: die 
            )
        )
    }
   
// console.log();
    const diceElements = dice.map((dieObject) => 
                                <Die 
                                    value={dieObject.value} 
                                    isHeld={dieObject.isHeld} 
                                    key={dieObject.id} 
                                    hold={()=>hold(dieObject.id)}
                                />);   
    return(
        <>
        <header>
                <h2>Tenzies</h2>
                <Navbar />
            </header>
        <div className="tenzies-game">
            
            <div className="tenzies">
                <main>
                    <h1 className="title">Tenzies</h1>
                    <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                    <div className="dice-container">                      
                        {diceElements}
                    </div>
                    <button className="roll-dice" onClick={rollDice}>Roll</button>
                </main>
            </div>   
        </div>
        
        </>
    )
}export default Tenzies;