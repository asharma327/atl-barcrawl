import React, { Component } from 'react';
import LiveMap from './LiveMap'
import Hero from './Hero'
import FullMap from "./FullMap";
import FAQs from "./FAQs";

class App extends Component{
  render() {
    return(
        <div className="app">
          <div className="leftColumn" />
          <div className="middleColumn">
              <Hero />
              <LiveMap />
              <FullMap/>
              <FAQs/>
          </div>
          <div className="rightColumn" />
        </div>
    )
  }
}

export default App;
