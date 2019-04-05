import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  getCurrentDay(){
    let days = {
      1: "Monday",
      2: "Tuesday",
      3: "Wendnesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday",
      7: "Sunday"  
    };

    let date = new Date();
    let number = date.getDay();

    return days[number]; 
  }

  getCurrentDate(){
    let date= new Date();
    let number = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();

    let months= {
      1: "January",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December"
    };

    return day + " " + months[number] + " " + year;
  }

  render() {
    return (
      <div className="App">
        <div className="date">{this.getCurrentDate()}</div>
        <div className="day">{this.getCurrentDay()}</div>
<br />
        <ul>
          <li>Read book </li>
          <li>Go to school </li>
          <li>Send text message </li>
          <li>Call Laurent </li>
        </ul>
      </div>

      
    );
  }
}




export default App;
