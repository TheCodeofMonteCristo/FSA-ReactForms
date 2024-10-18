// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css'; // Import global styles

// Render the App component inside the root DOM element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
