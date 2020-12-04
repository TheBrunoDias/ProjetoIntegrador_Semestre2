import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Blog/NewPost/newpost.css";

import admin from "../../server/admin.json";


export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState("");

  function handleSubmit(event) {
    const loginData = {
      email: email,
      password: password,
    };

    if (
      loginData.email !== admin.email ||
      loginData.password !== admin.password
    ) {
      console.log("Usuário Inválido");
      setCheck(true);
    } else {
      console.log(loginData);
      console.log(`Bem Vindo ${admin.name}`);
      setCheck(false);
    }
    setEmail("");
    setPassword("");

    event.preventDefault();
  }

  function handleEmail(e) {
    setEmail(e.target.value);
    console.log(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
    <div className="container-new-post">
      <h1>Painel Administrativo - Numigame</h1>
      <br/>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <input
              type="email"
              name="admin_email"
              id="admin_email"
              placeholder="Insira seu Email"
              onChange={handleEmail}
              required
              value={email}
            />
            <br />
            <input
              type="password"
              name="admin_password"
              id="admin_password"
              placeholder="Insira o Password"
              onChange={handlePassword}
              required
              value={password}
              />
          </div>
            <br/>
            <br />
          <Link to="/admin/update"><button className="button button1">Login</button></Link>
        </form>

        {check ? (
          <p style={{ color: "red" }}>Usuário Invalido, tente novamente</p>
        ) : null}
    </div>
    </>
  );
}
