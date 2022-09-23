import React, { useState, useEffect } from 'react';

const MIN_PASSWORD_LENGTH = 6;
const MIN_NAME_LENGTH = 12;

function Register() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginBtnDisabled, setIsLoginBtnDisabled] = useState(true);

  useEffect(() => {
    function validateUserPayload() {
      const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
      const emailValidation = email.match(emailRegex);
      const passwordValidation = password.length >= MIN_PASSWORD_LENGTH;
      const nameLengthValidation = userName.length >= MIN_NAME_LENGTH;

      if (emailValidation && passwordValidation && nameLengthValidation) {
        return setIsLoginBtnDisabled(false);
      } return setIsLoginBtnDisabled(true);
    } validateUserPayload();
  }, [email, password, userName]);

  return (
    <form>
      <div>
        <input
          type="text"
          data-testeid="common_register__input-name"
          placeholder="seu nome"
          onChange={ ({ target }) => setUserName(target.value) }
        />
        <input
          type="email"
          data-testeid="common_register__input-email"
          placeholder="email@email.com"
          onChange={ ({ target }) => setEmail(target.value) }
        />
        <input
          type="password"
          data-testeid="common_register__button-register"
          placeholder="**********"
          onChange={ ({ target }) => setPassword(target.value) }
        />
        <button
          type="button"
          data-testeid="common_register__input-name"
          disabled={ isLoginBtnDisabled }
        >
          Cadastrar
        </button>
      </div>
      <p data-testid="common_register__element-invalid_register">
        error-message
      </p>
    </form>
  );
}

export default Register;

/*
common_register__input-name
common_register__input-email
common_register__input-password
common_register__button-register
common_register__element-invalid_register [Elemento oculto (Mensagens de erro)]
*/
