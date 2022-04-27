import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/Login.css';
import cooking from '../images/cooking.svg';

function Login() {
  const history = useHistory();
  const {
    handleChange,
    loginData,
    validate,
    buttonState,
  } = useContext(AppContext);

  useEffect(() => {
    validate();
  }, [loginData]);

  function submitLogin() {
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    const email = JSON.stringify({ email: loginData.email });
    localStorage.setItem('user', email);
    history.push('/foods');
  }

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
          disabled={ buttonState.btnDisabled }
          onClick={ submitLogin }
        >
          Enter
        </button>
      </form>
    </div>
  );
}

export default Login;
