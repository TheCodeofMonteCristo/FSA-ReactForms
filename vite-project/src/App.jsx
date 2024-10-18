// App.jsx

import React, { useState } from 'react';
import SignUpForm from './components/SignUpForm';
import Authenticate from './components/Authenticate';
import './App.css'; // Import global CSS

export default function App() {
  // State to hold the token returned after successful signup
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      <h1>JWT Authentication App</h1>
      
      {/* Passing setToken to SignUpForm and token to Authenticate */}
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} />
    </div>
  );
}
