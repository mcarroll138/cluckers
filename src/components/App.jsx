import React from "react";
import Navbar from './Navbar';
import CluckControl from "./CluckComponents/CluckControl";
import hennyImage from "./../img/henny.jpeg"


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <hr />
      <img src={hennyImage} />
      <h1>Recent Clucks:</h1>
      <CluckControl />
      {/*<h1>Profile:</h1>
      <ChickenProfile />
      <AboutMe />
      <hr />
      <h1>Wanna &#128020; about it?</h1> */}
      {/* Remove cluckupdate and cluck post and move to cluck control */}
      {/* <CluckUpdate />
      <CluckPost /> */}
      {/* <h2>The Pecking Order:</h2>
      <ChickenList /> */}

    </React.Fragment>
  );
}

export default App
