import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Teste o componente <Login.js>', () => {
  it('Verifica os data-testids dos elementos')
  render(<App />);
  const emailInput = screen.getByTestId("email-input");
  const passwordInput = screen.getByTestId("password-input");
  const submitBtn = screen.getByTestId("login-submit-btn");
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(submitBtn).toBeInTheDocument();
});
