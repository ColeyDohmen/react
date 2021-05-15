import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../App';
import reportWebVitals from '../reportWebVitals';


class Info extends React.Component {
    render() {
      return (
      <div className="card" style={{}}>
    
        
        <div className="info">
        <h1>How's it going?</h1>
        <p>Hullo</p>
        <p>This is me adding a bunch of extra words that don't actually mean anything.</p>
        </div>
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  </ul>  
        </div>
      );
    }
  } 
  export default Info
  
  ReactDOM.render(
    <React.StrictMode>
      <App />
      <Info />
    </React.StrictMode>,
    document.getElementById('root'),
  
  );

  reportWebVitals();