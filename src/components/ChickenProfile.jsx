import React from "react";
import henny from "./../img/henny.jpeg";

function ChickenProfile() {
  const containerStyle = {
    display: "flex",
    backgroundcolor: '#ccc',
    flexDirection: "row",
    alignItems: "right",
    border: "1px solid #ccc", // Add a border around the profile info div
    padding: "10px", // Optional padding for better spacing
  };

  const imageStyle = {
    maxWidth: "50%", // Limit the maximum width to 25% of the viewport
    // width: "25%", // Allow the image to adjust its height proportionally
    marginRight: "20px",
  };

  const profileInfoStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid #ccc", // Add a border around the profile info div
    padding: "10px", // Optional padding for better spacing
  };

  const numbersStyle = {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '12px',
    alignItems: 'left'

  }

  return (
    <div style={containerStyle}>
      <div>
        <img src={henny} style={imageStyle} />
        <div style={numbersStyle}>
          <span>&#128020; Following: 143</span>
          <span>Followers: 1.3k &#128020;</span>
        </div>
      </div>
      <div style={profileInfoStyle}>
        <h1>
          <em>Sally B Mild</em>
        </h1>
        <div>
          <h2>About Me:</h2>
          <h3>
            Respect thy peck... not no spring chicken, definitely know my way around the hen house.
            I work hard, I play hard. Live fast, die young.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ChickenProfile;

// import React from "react";
// import henny from "./../img/henny.jpeg";
// function ChickenProfile() {
//     const containerStyle = {
//         display: "flex",
//         flexDirection: "row",
//         alignItems: "center",
//       };
    
//       const scrollContainerStyle = {
//         height: "80vh", // Set a fixed height for the scrollable container
//         overflowY: "scroll", // Enable vertical scrolling
//       };
    
//       const imageStyle = {
//         maxWidth: "10%", // Limit the maximum width to 25% of the viewport
//         width: "auto", // Allow the image to adjust its height proportionally
//         marginRight: "20px",
//       };
//     return (
//         <div style={containerStyle}>
//             <img src={henny} style={imageStyle}/>
//             <h1><em>Sally B Mild</em></h1>
            
//             <h4><th>&#128020; Following: 143 |</th>
//             <th>Followers: 1.3k&#128020;</th></h4>
        
           

//            <h2>About Me:</h2>
//            <h3>Respect thy peck... not no spring chicken, definetly know my way around the hen house. I work hard, I play hard. Live fast, die young.</h3>
//         </div >
       
//     );
// }

// export default ChickenProfile


// const myStyledComponentStyles = {
//     backgroundColor: '#ecf0f1',
//     fontFamily: 'sans-serif',
//     paddingTop: '50px',
//     resizeBy: "25%"
// }

// const imageStyle = {
//     maxWidth: "25%", // Limit the maximum width to 25% of the viewport
//     width: "auto", // Allow the image to adjust its height proportionally
//     marginRight: "20px",
//   };