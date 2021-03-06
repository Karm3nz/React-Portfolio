import React from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Wrapper() {
    return(
        // MAIN CONTENT
        <section className="section z-depth-5">
            <section className="row container">
            {/* <!--Some "slogan" here--> */}
                <h2 class="header">Hello, my name is Carmen.</h2>
                <p class="grey-text text-darken-3 lighten-3">Welcome to my portfolio!</p>
                <br></br>
                <ul class="collapsible z-depth-3">
                    <About />
                    <Projects />
                    <Contact />
                </ul>
            </section>
        </section>
    );
}

export default Wrapper;