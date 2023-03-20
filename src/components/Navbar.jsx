import React from "react";
import logo from "../resources/logo.png"

function Navbar () {
    return (
        <header className="navbar">
            <img className="navbar--logo" src={logo} alt='troll-face'/>
            <p className="navbar--title">Meme Generator</p>
            <p className="navbar--project">React Course - Project 3</p>
        </header>
    )
}

export default Navbar;