import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from '../App';
import reportWebVitals from '../reportWebVitals';


function Text() {
    const firstName = "Coley"
    const lastName = "Dohmen"
      return (
    <div>
        <input type="checkbox" />
        <p>Some text here</p>
        <h3>Hello {firstName + " " + lastName}!</h3>
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