import React from 'react';

function Login() {
  return (
    <section>
      <h2>Delivery App</h2>
      <div>
        <input type="email" data-testid="common_login__input-email" />
        <input type="password" data-testid="common_login__input-password" />
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

/*
1: common_login__input-email
- 2: common_login__input-password
- 3: common_login__button-login
- 4: common_login__button-register
- 5: common_login__element-invalid-email [Elemento oculto (Mensagens de erro)
*/
