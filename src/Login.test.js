import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from './App';

describe('Teste o componente <Login.js>',
  () => {
    const eInput = 'email-input';
    const passInput = 'password-input';
    const subBtn = 'login-submit-btn';
    const mail = 'test@test.com';

    it('Verifica os data-testids dos elementos', () => {
      render(<App />);
      const emailInput = screen.getByTestId(eInput);
      const passwordInput = screen.getByTestId(passInput);
      const submitBtn = screen.getByTestId(subBtn);

      expect(emailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(submitBtn).toBeInTheDocument();
    });
    it('Verifica se e possivel escrever o email', () => {
      render(<App />);
      const mockEmail = mail;
      const emailInput = screen.getByTestId(eInput);
      userEvent.type(emailInput, mockEmail);

      expect(emailInput).toHaveProperty('value', mockEmail);
    });
    it('Verifica se e possivel escrever a senha', () => {
      render(<App />);
      const password = '1234567';
      const passwordInput = screen.getByTestId(passInput);
      userEvent.type(passwordInput, password);

      expect(passwordInput).toHaveProperty('value', password);
    });
    it('Verifica os data-testids dos elementos', () => {
      render(<App />);

      const emailInput = screen.getByTestId(eInput);
      const passwordInput = screen.getByTestId(passInput);
      const submitBtn = screen.getByTestId(subBtn);

      const mockEmail = mail;
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
    it('Verifica se os dois tokens são gravados', () => {
      render(<App />);

      const emailInput = screen.getByTestId(eInput);
      const passwordInput = screen.getByTestId(passInput);
      const submitBtn = screen.getByTestId(subBtn);
      const mockEmail = mail;
      const password = '1234567';

      userEvent.type(emailInput, mockEmail);
      userEvent.type(passwordInput, password);
      userEvent.click(submitBtn);

      const token1 = localStorage.getItem('mealsToken');
      const token2 = localStorage.getItem('cocktailsToken');
      const userToken = JSON.parse(localStorage.getItem('user'));

      expect(token1).toBe('1');
      expect(token2).toBe('1');
      expect(userToken.email).toBe(mockEmail);

      const foodsPageTitle = screen.getByTestId('All-category-filter');
      expect(foodsPageTitle).toBeInTheDocument();
    });
  });
