import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from './App';

describe('Teste o componente <Login.js>', 
 () => {
  it('Verifica os data-testids dos elementos', () => {
    render(<App />);
  const emailInput = screen.getByTestId("email-input");
  const passwordInput = screen.getByTestId("password-input");
  const submitBtn = screen.getByTestId("login-submit-btn");
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(submitBtn).toBeInTheDocument();
  })
  it('Verifica se e possivel escrever o email', () => {
    render(<App />);
  const mockEmail = 'test@test.com'
  const emailInput = screen.getByTestId("email-input");
  userEvent.type(emailInput, mockEmail);

  expect(screen.getByText(mockEmail)).toBeInTheDocument();
  })
});
