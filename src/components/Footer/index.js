import React from "react";
import "./style.css";

function Footer() {
    return (
        <footer className="page-footer grey darken-2">
            <div className="container ">
                <div className="row">
                    <div className="github">
                        {/* <h5 className="white-text">Github</h5> */}
                        <a href="https://github.com/Karm3nz" className="white-text">Github</a>
                        {/* <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p> */}
                    </div>
                    {/* <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Links</h5>
                        <ul>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                        </ul>
                    </div> */}
                </div>
            </div>
            <div className="footer-copyright">
                <div className="row">
                    <div className="copyright">
                        <div>
                            © 2021 Copyright
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;