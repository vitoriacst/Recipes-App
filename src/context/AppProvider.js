import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider(props) {
  const { children } = props;
  const INITIAL_BTN = {
    btnDisabled: true,
  };

  const INITIAL_LOGIN = {
    email: '',
    password: '',
  };

  const [loginData, setLoginData] = useState(INITIAL_LOGIN);
  const [buttonState, setButtonState] = useState(INITIAL_BTN);

  function validate() {
    const { email, password } = loginData;
    const min = 6;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const emailValid = emailRegex.test(email);
    const passwordValid = password.length > min;
    const validAllFields = emailValid && passwordValid;
    setButtonState({
      btnDisabled: !validAllFields,
    });
  }

  function handleChange({ target }) {
    setLoginData({ ...loginData, [target.name]: target.value });
  }

  const providerValue = {
    loginData,
    buttonState,
    handleChange,
    setLoginData,
    validate,
  };

  return (
    <AppContext.Provider value={ providerValue }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
