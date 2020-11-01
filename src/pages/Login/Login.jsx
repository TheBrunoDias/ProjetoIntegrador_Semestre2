import React from 'react';
import './Login.css';

function Login() {
  return (
  <>
    <div className='container_login'>
      <form>
        Nome Completo:
        <input type="text" name="name" /> <br/>
        Seu Email:
        <input type="text" name="name" /> <br/>
        Sua Senha:
        <input type="text" name="name" /> <br/>
        <input type="text" name="name" /> <br/>
      </form>
    </div>

  </>
  );
}

export default Login;