import "./MemeGenerator.css"
import sampleMemeImg from "../assets/cat-meme.jpeg"
import { useEffect, useState } from "react";

function Main(){

    const [meme, setMeme] = useState({
        topText:"",
        bottomText:"",
        imgUrl: sampleMemeImg,
    })
    const handleChange =(event)=>{
       const {value,name} = event.currentTarget;
       console.log(value);
        setMeme(prevMeme=>({
            ...prevMeme,
            [name]:value
        }))
    }
    //fetch data from api to get imgUrls data set
    const [allMemes, setAllMemes] = useState([]);
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res =>res.json())
        .then(data => setAllMemes(data.data.memes))
        //console.log(data.data.memes.url);
    },[]);

    const getMemeImage = () =>{
        const randomNumber= Math.floor(Math.random() * allMemes.length);
        const newMemeUrl = allMemes[randomNumber].url;
        setMeme(prevMeme => ({
           ...prevMeme,
        imgUrl:newMemeUrl
     }))
    }

    return(
        <>
          <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={getMemeImage}>Get a new meme image </button>
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