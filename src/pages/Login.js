import React from 'react';

function Login() {
  return (
    <div className="login-container">
      <input
        className="email-login-input"
        type="email"
        data-testid="email-input"
      />
      <input
        className="password-login-input"
        type="password"
        data-testid="password-input"
      />
      <button
        className="enter-login-button"
        type="button"
        data-testid="login-submit-btn"
      >
        Enter
      </button>
    </div>
  );
}

export default Login;
