import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import background from './Components/Images/background.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="background" style={{ backgroundImage: `url(${background})` }}>
      <App />
    </div>
  </React.StrictMode>
);

