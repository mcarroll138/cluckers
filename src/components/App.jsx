import React from "react";
import Navbar from './Navbar';
import ChickenList from "./ChickenList";
import CluckPost from "./CluckList";
import Chicken from "./chicken";
import ChickenProfile from "./ChickenProfile";


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <hr />
      <h1>Profile:</h1>
      <ChickenProfile />
      <hr />
      <h1>Wanna yell about it?</h1>
      <CluckPost />
      <h2>The Pecking Order:</h2>
      <ChickenList />

    </React.Fragment>
  );
}

export default App
