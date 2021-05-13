import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Card extends React.Component {
  render() {
    return (
    <div className="github-profile" style={{}}>
      {/* <img src={profile.avatar_url} /> */}
      
      <div className="info">
      <h1>How's it going?</h1>
      <p>Hullo</p>
      <p>This is me adding a bunch of extra words that don't actually mean anything.</p>
      </div>

      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Card />
  </React.StrictMode>,
  document.getElementById('root'),

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
