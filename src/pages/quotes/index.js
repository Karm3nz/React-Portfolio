import React from "react";
// import API from "../utils/API";
import Card from "../../components/Card";

function Quotes() {
    return (
        <div>
            <Card />
        </div>
    );
}

export default Quotes;
// import React, { useState, useEffect } from "react";
// import API from "../../util/API";
// import Card from "../../components/Card";
// import DeveloperContext from "./utils/DeveloperContext";

// function Quote() {
//     const [developerState, setDeveloperState] = useState({
//         quote: ""
//       });

    
//     useEffect(() => {
//         // For demonstration purposes, we mock an API call.
//         API.getRandomQuote()
//         .then((res) => { 
//             setDeveloperState(res);
//         });
//     }, []);
    
//     return (
//         <div>
//             <Card quote={this.state.quote} />
//         </div>
//     );
// }

// export default Quotes;