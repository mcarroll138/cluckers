// import React from "react";
// import Navbar from './Navbar';
// import CluckControl from "./CluckComponents/CluckControl";
// import hennyImage from "./../img/henny.jpeg"


// function App() {
//   return (
//     <React.Fragment>
//       <Navbar />
//       <hr />
//       <img src={hennyImage} />
      
//       <CluckControl />
//          </React.Fragment>
//   );
// }

// export default App

import React from "react";
import Navbar from './Navbar';
import CluckControl from "./CluckComponents/CluckControl";
import hennyImage from "./../img/henny.jpeg";
import ChickenProfile from "./ChickenProfile";

function App() {
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };

  const scrollContainerStyle = {
    height: "50vh", // Set a fixed height for the scrollable container
    overflowY: "scroll", // Enable vertical scrolling
  };

  const imageStyle = {
    maxWidth: "25%", // Limit the maximum width to 25% of the viewport
    width: "auto", // Allow the image to adjust its height proportionally
    marginRight: "20px",
  };

  return (
    <React.Fragment>
      <Navbar />
      <hr />
      <ChickenProfile />
      <div style={containerStyle}>
        {/* <img src={hennyImage} style={imageStyle} /> */}
        <div style={scrollContainerStyle}>
          
          <CluckControl />

       
        </div>
      </div>
      <hr />      
      
    </React.Fragment>
  );
}

export default App;


