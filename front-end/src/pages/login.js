// import axios from 'axios';
import React, { useEffect, useState } from 'react';

const HTTP_NOT_FOUND = 404;
const MIN_PASSWORD_LENGTH = 6;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);
  const [isLoginBtnDisabled, setIsLoginBtnDisabled] = useState(true);

  useEffect(() => {
    function validateUserPayload() {
      const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

      if (email.match(emailRegex) && password.length >= MIN_PASSWORD_LENGTH) {
        return setIsLoginBtnDisabled(false);
      } return setIsLoginBtnDisabled(true);
    } validateUserPayload();
  }, [email, password]);

  const login = async () => {
    const response = { status: 404 };
    // const response = await axios.post('localhost:3001/login', { email, password })

    if (response.status === HTTP_NOT_FOUND) {
      return setErrorMessage('Invalid email or password');
    } return setErrorMessage(false);
  };

  return (
    <section>
      <h2>Delivery App</h2>
      <div>
        <input
          type="email"
          data-testid="common_login__input-email"
          onChange={ ({ target }) => { setEmail(target.value); } }
        />
        <input
          type="password"
          data-testid="common_login__input-password"
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
        <button
          type="button"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>
      </div>
      {errorMessage ? (
        <p data-test-id="common_login__element-invalid-email">
          {errorMessage}
        </p>
      ) : null}
    </section>
  );
}

export default Login;
