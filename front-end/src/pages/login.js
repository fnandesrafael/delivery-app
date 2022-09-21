import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
        <button type="button" data-testid="common_login__button-login">Login</button>
        <button type="button" data-testid="common_login__button-register">
          Ainda não tenho conta
        </button>
      </div>
      <p data-test-id="common_login__element-invalid-email" />
    </section>
  );
}

export default Login;
