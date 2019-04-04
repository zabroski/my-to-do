import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  getCurrentDay(){
    let days= {
      1: "Monday",
      2: "Tuesday",
      3: "Wenesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday",
      7: "Sunday"  
    };

    let date = new Date();
    let number = date.getDay();

    return days[number]; 
  }

  render() {
    return (
      <div className="App">
        <div className="date">January 27, 2019</div>
        <div className="day">{this.getCurrentDay()}</div>
      </div>
    );
  }
}

export default App;
