import React from "react";

function Projects() {
    return(
        // <!--Project and Experiences-->
        <li>
          <div class="collapsible-header"><i class="material-icons">folder_open</i>Projects & Experiences</div>
          <section class="collapsible-body">
            <section class="row">
              <section class="col s10">
                <h3>Projects</h3>
              </section>
            </section>
            <hr></hr>
            {/* <!--Listed Projects--> */}
            {/* <!--Spacebook--> */}
            <section class="row">
              <section class="col">
                <h5>Spacebook</h5>
                <img src= "https://i.postimg.cc/Pxrwsd4W/Screen-Shot-2021-02-04-at-2-26-40-PM.png"  alt= "Date Night Application Screenshot, Login"></img>
              </section>
            </section>
            <section class="row">
              <section class="col">
                <img src= "https://i.postimg.cc/L8LfjC51/Screen-Shot-2021-02-04-at-2-29-02-PM.png"  alt= "Date Night Application Screenshot, Moments Feed"></img>
              </section>
            </section>
            <section class="row">
              <section class="col">
                <img src= "https://i.postimg.cc/TYZgLMdx/Screen-Shot-2021-02-04-at-2-28-11-PM.png"  alt= "Date Night Application Screenshot, Profile"></img>
              </section>
            </section>
            <section class="row">
              <section class="col">
                <img src= "https://i.postimg.cc/8kXhGfxj/Screen-Shot-2021-02-04-at-2-27-59-PM.png"  alt= "Date Night Application Screenshot, Profile"></img>
              </section>
            </section>
            <section class="row">
              <section class="col">
                <ul>
                  <li class= "li"> The <a href= "http://spacebookx.herokuapp.com/">link</a> to Spacebook.</li>
                  <li class= "li"> The <a href= "https://github.com/enochj316/Project2">link</a> to Spacebook Github repository.</li>
                </ul>
              </section>
            </section>
            {/* <!--Date-Night Planner--> */}
            <section class="row">
              <section class="col">
                <h5>Date-Night Planner Application</h5>
                <img src= "https://i.postimg.cc/gkY9vgnn/date-Night-screenshot.png" class ="dateNight" alt= "Date Night Application Screenshot"></img>
              </section>
            </section>
            <section class="row">
              <section class="col">
                <ul>
                  <li class= "li"> The <a href= "https://ivanduranic.github.io/date-night-planner/">link</a> to Date-Night Planner Aplication.</li>
                  <li class= "li"> The <a href= "https://github.com/ivanduranic/date-night-planner">link</a> to Date-Night Planner Github repository.</li>
                </ul>
              </section>
            </section>
            {/* <!--Weather Dashboard--> */}
            <section class="row">
              <section class="col">
                <h5>Weather Dashboard</h5>
                <img src= "https://i.postimg.cc/C5fxVmpG/weather-dashboard-city-Searches.png" class ="weatherDashboard" alt= "Weather Dashboard Screenshot"></img>
              </section>
            </section>
            <section class="row">
              <section class="col">
                <ul>
                  <li class= "li"> The <a href= "https://karm3nz.github.io/Weather-Dashboard/">link</a> to Weather Dashboard Aplication.</li>
                  <li class= "li"> The <a href= "https://github.com/Karm3nz/Weather-Dashboard">link</a> to Weather Dashboard Github repository.</li>
                </ul>
              </section>
            </section> 
          </section>
        </li>
    );
}

export default Projects;