import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

const HTTP_NOT_FOUND = 404;
const HTTP_OK = 200;
const MIN_PASSWORD_LENGTH = 6;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);
  const [isLoginBtnDisabled, setIsLoginBtnDisabled] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    function validateUserPayload() {
      const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

      if (email.match(emailRegex) && password.length >= MIN_PASSWORD_LENGTH) {
        return setIsLoginBtnDisabled(false);
      } return setIsLoginBtnDisabled(true);
    } validateUserPayload();
  }, [email, password]);

  const login = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });

      if (response.status === HTTP_OK) {
        setIsLogged(true);
        setErrorMessage(false);
      }
    } catch (error) {
      if (error.response.status === HTTP_NOT_FOUND) {
        return setErrorMessage('email ou senha inválidos');
      } return setErrorMessage(false);
    }
  };

  return (
    isLogged ? (
      <Navigate to="/customer/products" />
    ) : (
      <section>
        <h2>Delivery App</h2>
        <div>
          <input
            type="email"
            data-testid="common_login__input-email"
            placeholder="email@email.com"
            onChange={ ({ target }) => { setEmail(target.value); } }
          />
          <input
            type="password"
            data-testid="common_login__input-password"
            placeholder="**********"
            onChange={ ({ target }) => { setPassword(target.value); } }
          />
          <button
            type="button"
            data-testid="common_login__button-login"
            onClick={ login }
            disabled={ isLoginBtnDisabled }
          >
            Login
          </button>
          <Navigate to="/register">
            <button
              type="button"
              data-testid="common_login__button-register"
            >
              Ainda não tenho conta
            </button>
          </Navigate>

        </div>
        <span data-testid="common_login__element-invalid-email">
          {errorMessage}
        </span>
      </section>
    )
  );
}

export default Login;
