// components/SignUpForm.jsx

import React, { useState } from 'react';
import './SignUpForm.css'; // Import component-specific CSS

export default function SignUpForm({ setToken }) {
  // Controlled form state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // Form validation error
  const [validationError, setValidationError] = useState(null);

  // Handle form submission
  async function handleSubmit(event) {
    event.preventDefault();

    // Basic form validation
    if (username.length < 8) {
      setValidationError('Username must be at least 8 characters long');
      return;
    }
    setValidationError(null); // Clear validation error if valid

    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();

      // If successful, set token
      if (result.success) {
        setToken(result.token);
        setError(null);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>

      {/* Conditionally render error or validation message */}
      {error && <p className="error">{error}</p>}
      {validationError && <p className="error">{validationError}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
