import React from "react";

function About() {
    return (
        // <!--About Me-->
        <li>
          <div class="collapsible-header"><i class="material-icons">filter_drama</i>About Me</div>
          <section class="collapsible-body">
            <section class="row">
              <section class="col s10">
                <h3>Biography</h3>
              </section>
            </section>
            <hr></hr>
            <section class="row bio">
              <section class="col s2">
                <img src="https://i.postimg.cc/KznDt4Y0/rsz-1rsz-img-20160506-033319.jpg" class= "me" alt="Self display portrait"></img>
              </section>
              <section class="col s8">
                <h6> Let me introduce myself again, hello, my name is Carmen. I graduated Ryerson University with a BComm degree majoring in human resources. Nearing graduation, I became more and more aware that human resources was not going to be my career. I took some time after graduation to figure out what I wanted to pursue next. With advice from peers, some basic work from a friend studying computer science, as well as further research, I found myself wanting to learn more.</h6>
              </section>
            </section>
          </section>
        </li>
    );
}

export default About;