import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from './App';

describe('Teste o componente <Login.js>',
  () => {
    it('Verifica os data-testids dos elementos', () => {
      render(<App />);
      const emailInput = screen.getByTestId('email-input');
      const passwordInput = screen.getByTestId('password-input');
      const submitBtn = screen.getByTestId('login-submit-btn');

      expect(emailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(submitBtn).toBeInTheDocument();
    });
    it('Verifica se e possivel escrever o email', () => {
      render(<App />);
      const mockEmail = 'test@test.com';
      const emailInput = screen.getByTestId('email-input');
      userEvent.type(emailInput, mockEmail);

      expect(emailInput).toHaveProperty('value', mockEmail);
    });
    it('Verifica se e possivel escrever a senha', () => {
      render(<App />);
      const password = '1234567';
      const passwordInput = screen.getByTestId('password-input');
      userEvent.type(passwordInput, password);

      expect(passwordInput).toHaveProperty('value', password);
    });
    it('Verifica os data-testids dos elementos', () => {
      render(<App />);

      const emailInput = screen.getByTestId('email-input');
      const passwordInput = screen.getByTestId('password-input');
      const submitBtn = screen.getByTestId('login-submit-btn');

      const mockEmail = 'test@test.com';
      const wrongEmail1 = 'test@.com';
      const wrongEmail2 = 'test@';
      const wrongEmail3 = 'test';
      const wrongEmail4 = 'test@test';

      const password = '1234567';
      const wrongPassword = '123456';

      userEvent.type(emailInput, wrongEmail1);
      expect(submitBtn).toHaveProperty('disabled', true);

      userEvent.type(emailInput, wrongEmail2);
      expect(submitBtn).toHaveProperty('disabled', true);

      userEvent.type(emailInput, wrongEmail3);
      expect(submitBtn).toHaveProperty('disabled', true);

      userEvent.type(emailInput, wrongEmail4);
      expect(submitBtn).toHaveProperty('disabled', true);

      userEvent.type(passwordInput, wrongPassword);
      expect(submitBtn).toHaveProperty('disabled', true);

      userEvent.type(emailInput, mockEmail);
      userEvent.type(passwordInput, password);

      expect(submitBtn).toHaveProperty('disabled', false);
    });
  });
