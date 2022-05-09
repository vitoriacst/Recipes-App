import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/Login.css';
import hatLogo from '../assets/hat.svg';
import Wave from '../assets/waveLogin.svg';
import leftHandImg from '../assets/leftHand.svg';
import rightHandImg from '../assets/rightHand.svg';

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
      <img src={ Wave } className="wave-logo" alt="chapeu de cozinheiro" />
      <img src={ hatLogo } alt="chapeu de cozinheiro" />
      <form className="form-input">
        <h1 className="form-title">App de receitas</h1>
        <input
          className="login-input"
          type="email"
          name="email"
          data-testid="email-input"
          onChange={ handleChange }
          placeholder="E-mail"
        />
        <input
          className="login-input"
          type="password"
          name="password"
          data-testid="password-input"
          onChange={ handleChange }
          placeholder="Password"

        />
        <button
          className="login-input button"
          type="button"
          data-testid="login-submit-btn"
          disabled={ buttonState.btnDisabled }
          onClick={ submitLogin }
        >
          Sign in
        </button>
      </form>
      <img className="hand-img left" src={ leftHandImg } alt="arm logo" />
      <img className="hand-img right" src={ rightHandImg } alt="arm logo" />
    </div>
  );
}

export default Login;
