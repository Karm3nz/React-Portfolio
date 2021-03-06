import React from "react";
import "./style.css";

function Navbar(){
    return (
        <nav className="grey darken-2">
            <div class="nav-wrapper">
            <a href="/"><img src="https://i.postimg.cc/tCXtcXGJ/logo.png" className="logo" alt="logo"></img></a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
            </div>
        </nav>
    );
}

export default Navbar;