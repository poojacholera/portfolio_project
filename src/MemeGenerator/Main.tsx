import "./MemeGenerator.css"
import sampleMemeImg from "../assets/cat-meme.jpeg"
import { useState } from "react";

function Main(){

    const [meme, setMeme] = useState({
        topText:"One does not simply",
        bottomText:"Walk into Mordor",
        imgUrl: sampleMemeImg,
    })

    return(
        <>
          <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                     
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        
                    />
                </label>
                <button>Get a new meme image </button>
            </div>
            <div className="meme">
                <img src={meme.imgUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
        </>
    )
}export default Main;