import React from 'react';
import './Login.css';
import logo from '../../Assets/img/LoginCadastro/Logo.png';

// import { useLanguage } from '../../context/language';

function Login() {

  // const {language} = useLanguage();

  return (
    <div className="login_background">
      <div className='container_login'>
      <img src={logo} alt="Logo"/>
        <form >
          <h3>Entrar</h3>
          <input type="email" name="user_email" id="user_email" placeholder="Insira seu Email" required />
          <input type="password" name="user_password" id="user_password" placeholder="Insira sua senha" required />
          <button>Login</button>
        </form>
        <form>
        <hr color="black"/>
          <h3> Cadastrar </h3>
          <input type="text" name="register_name" id="register_name" placeholder="Nome completo" required/>
          <input type="email" name="register_email" id="register_email" placeholder="Email" required/>
          <input type="password" name="register_password" id="register_password" placeholder="Senha" required/>
          <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirmar Senha" required/>
          <button>Cadastrar</button>
        </form>
      </div>

    </div>
  );
}

export default Login;