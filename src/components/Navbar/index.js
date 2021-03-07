import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";
// import Quotes from "../../pages/quotes";

function Navbar(){
    return (
        <nav className="grey darken-2">
            <div class="nav-wrapper">
                <a href="/"><img src="https://i.postimg.cc/tCXtcXGJ/logo.png" className="logo" alt="logo"></img></a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    {/* <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li> */}
                    <Link to="/quotes">Cool Quotes</Link>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;