// import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Quotes from "../src/pages/quotes";
import Wrapper from "../src/components/Wrapper";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Route exact path="/quotes" component={Quotes} />
      <div>
        {/* Parallax Container Picture 1 */}
        <div className="parallax-container">
            <div className="parallax">
                <img src={"https://i.postimg.cc/PJHqb1wT/pexels-gemma-underwood-1112424.jpg"} alt="Background parallax 1" />
            </div>
        </div>
        <Wrapper /> 
        {/* Parallax Container Picture 2 */}
        <div class="parallax-container">
            <div class="parallax">
                <img src={"https://i.postimg.cc/mDCDFmhm/pexels-pixabay-157604.jpg"} alt="Background parallax 2" />
            </div>
        </div>
      </div>
      <Footer />
    </div>
    </Router>
    
  );
}

export default App;
