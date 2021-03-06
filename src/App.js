// import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "../src/components/Wrapper";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
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
  );
}

export default App;
