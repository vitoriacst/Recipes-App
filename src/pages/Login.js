import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import '../styles/Login.css';
import cooking from '../images/cooking.svg';

function Login() {
  const {
    handleChange,
    loginData,
    validate,
  } = useContext(AppContext);

  useEffect(() => {
    validate();
  }, [loginData]);

  return (
    <div className="login-container">
      <img src={ cooking } alt="woman cooking" className="woman-cooking-image" />
      <form className="form-input">
        <input
          className="email-login-input"
          type="email"
          name="email"
          data-testid="email-input"
          onChange={ handleChange }
          placeholder="email"
        />
        <input
          className="password-login-input"
          type="password"
          name="password"
          data-testid="password-input"
          onChange={ handleChange }
          placeholder="password"

        />
        <button
          className="enter-login-button"
          type="button"
          data-testid="login-submit-btn"
          disabled
        >
          Enter
        </button>
      </form>
    </div>
  );
}

export default Login;
