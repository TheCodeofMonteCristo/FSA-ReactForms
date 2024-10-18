// components/Authenticate.jsx

import React, { useState } from 'react';

export default function Authenticate({ token }) {
  // State to hold success and error messages
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  // Handle token authentication
  async function handleClick() {
    if (!token) {
      setError('No token found. Please sign up first.');
      return;
    }

    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();

      // If successful, display success message and username
      if (result.success) {
        setSuccessMessage(`Authenticated as ${result.data.username}`);
        setError(null);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="authenticate">
      <h2>Authenticate</h2>

      {/* Conditionally render success or error messages */}
      {successMessage && <p className="success">{successMessage}</p>}
      {error && <p className="error">{error}</p>}

      <button onClick={handleClick}>Authenticate Token!</button>
    </div>
  );
}
