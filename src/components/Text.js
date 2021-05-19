import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from '../App';
import reportWebVitals from '../reportWebVitals';


function Text() {
    const firstName = "Coley"
    const lastName = "Dohmen"
    const date = new Date()
    const hours = date.getHours()

    let timeOfDay 
    const styles = {
        fontSize: 30
    }
    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "#04756F"
    } else if (hours >= 12 && hours < 17){
        timeOfDay = "afternoon"
        styles.color = "#8914A3"
    } else {
        timeOfDay = "night"
        styles.color = "#D90000"
    }
      return (
    <div>
        <input type="checkbox" />
        <p>Some text here</p>
        <h2>Hello {firstName + " " + lastName}!</h2>
        <h3 style={styles}>Good {timeOfDay}!</h3>
        <h4>It is currently about {date.getHours()} o'clock!</h4>
    </div>
      );
    
  } 
  export default Text
  
  ReactDOM.render(
    <React.StrictMode>
    </React.StrictMode>,
    document.getElementById('root'),
  
  );

  reportWebVitals();