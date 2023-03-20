import React from "react";
import memesData from '../resources/data/memeUrl';

function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const[allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage(event) {
        event.preventDefault()
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">       
                <input 
                    className="form--input" 
                    type="text" 
                    placeholder="Top Text"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                />   
                <input 
                    className="form--input" 
                    type="text" 
                    placeholder="Bottom Text"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                />
                <button onClick={getMemeImage} className="form--button">Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt={meme.randomImage} className="meme--image" />     
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme;