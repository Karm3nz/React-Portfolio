import React from "react";

function Contact() {
    return(
        // <!--Contact-->
        <li>
          <div class="collapsible-header"><i class="material-icons">email</i>Contact</div>
            <section class="collapsible-body">
                <section class="row">
                    <section class="col s10">
                        <h3>Contact Information:</h3>
                    </section>
                </section>
                <hr></hr>
                <section class="row">
                    <section class="col s10">
                        <h6>Email: huicarmen22@gmail.com</h6>
                        <h6>Phone: 416-898-1600</h6>
                        <h6>LinkedIn: <a href="https://www.linkedin.com/in/carmen-h-7bbb59171/">Carmen's LinkedIn</a></h6> 
                    </section>
                </section>

                {/* <!--Resume--> */}
                <section class="row">
                    <section class="col s10">
                        <h4>Resume:</h4>
                    </section>
                </section>
                <section class="row">
                    <section class="col s10">
                        <h6>Here is my <a href="assets/resume_ch_webDevelopment.pdf">resume</a> with my educational background and professional work experiences.</h6>
                    </section>
                </section>
            </section>
        </li>
    );
}

export default Contact;