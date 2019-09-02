// import files from components
import React, { Component } from 'react';
import './App.css';
import Head from "./head.js";
import Body from "./body.js";
import Legs from "./legs.js";

// create App class that extends Component
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="monster">
          {/* use component divs created for the head, body and legs */}
          <Head></Head>
          <Body></Body>
          <Legs></Legs>
        </div>

      </div>
    );
  }
}

// export the App
export default App;
