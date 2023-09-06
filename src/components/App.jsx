import React from "react";
import Navbar from './Navbar';
import ChickenList from "./ChickenList";
import CluckPost from "./CluckList";
import Chicken from "./chicken";
import ChickenProfile from "./ChickenProfile";
import AboutMe from "./AboutMe";
import CluckUpdate from "./CluckUpdate";


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <hr />
      <h1>Profile:</h1>
      <ChickenProfile />
      <AboutMe />
      <hr />
      <h1>Wanna yell about it?</h1>
      <CluckUpdate/>
      <CluckPost />
      <h2>The Pecking Order:</h2>
      <ChickenList />

    </React.Fragment>
  );
}

export default App
