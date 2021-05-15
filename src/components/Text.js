import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from '../App';
import reportWebVitals from '../reportWebVitals';


function Text() {
      return (
    <div>
        <input type="checkbox" />
        <p>Some text here</p>
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