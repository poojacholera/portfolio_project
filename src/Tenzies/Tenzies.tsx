import { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar";
import Die from "./Die";
import "./Tenzies.css"
import { nanoid } from "nanoid";
import ReactConfetti from "react-confetti";
 // @ts-nocheck

function Tenzies(){
    const [count,setCount] = useState(0);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [dice,setDice] = useState(()=>generateAllNewDice());
    const gameWon = dice.every(die => die.isHeld)&& dice.every(die=>die.value == dice[0].value)
      
    const rollDice = () =>{
        if (gameWon){
            setDice(generateAllNewDice())
            setCount(0);
        }else{
            setCount(prevCount => prevCount+1);
        setDice(prevDice => prevDice.map(die => 
                die.isHeld == true ? 
                die : 
                {...die, value:Math.ceil(Math.random() * 6)}
            ))
        }
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
    const hold = (id:string) =>{
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
    useEffect(()=>{
        if(gameWon && buttonRef.current != null){
            buttonRef.current.focus();
        }
    },[gameWon]); 
    return(
        <>
        <header className="tenzies-game-header">
                <h2 className="tenzies-header-name">Tenzies</h2>
                <Navbar />
            </header>
        <div className="tenzies-game">
            
            <div className="tenzies">
               
                    {gameWon && <ReactConfetti />}
                    <div aria-live="polite" className="sr-only">
                        {gameWon && <p>Congratulations ! You won! Press "New Game" to start playing again.</p>}
                    </div>
                    <h1 className="title">Tenzies</h1>
                    <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                    <div className="dice-container">                      
                        {diceElements}
                    </div>
                    <button ref={buttonRef} className="roll-dice" onClick={rollDice}>{gameWon ? `New Game` : `Roll`}</button>
                    <span>count: {count}</span>
               
            </div>   
        </div>
        
        </>
    )
}export default Tenzies;